import React, { useState } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chats from './Chats';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { Loader } from 'rsuite';


function Search() {
  const [username, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [err, setError] = useState("");

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));
      try{
        console.log('search started')
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data())
        });
      }catch(err){
        console.log("in catch block");
        setError(err);
      }
    }

  

  const handleKey =( e )=> {
    e.code === "Enter" && handleSearch();
  };


  return (
    <div className='search'>
      <FormControl fullWidth variant="standard">
        <Input onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKey}
          id="input-with-icon-adornment"
          color="warning"
          placeholder='Find User'
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      {err && <span>User not found!</span>}
      {user && <div className="chat">
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item>
            <Avatar className='profileImage' sx={{ width: 56, height: 56 }}>{user.displayName[0]}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography className='senderName' noWrap>{user.displayName}</Typography>
            {/* <Typography noWrap className='senderMsg'>hello</Typography> */}
          </Grid>
        </Grid>
      </div>
      }
      <Chats />
      <Chats />
      <Chats />
      <Chats />
    </div>

  )
}

export default Search