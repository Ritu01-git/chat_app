import React, { useContext, useState } from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chats from './Chats';
import { collection, query, where, getDocs, setDoc, updateDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { Loader } from 'rsuite';
import {AuthContext} from "../context/AuthContext";


function Search() {
  const [username, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [err, setError] = useState(null);
  const {currentUser} = useContext(AuthContext)

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

  const handleSelect = async() => {
    //check whether the group exists or not
    const combinedID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try{
      const res = await getDoc(doc(db, "chats", combinedID));

      if(!res.exists()){
        await setDoc(doc(db, "chats", combinedID), {messages: [] });

        //create chats

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedID + ".userInfo"] : {
            uid : user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedID+".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedID + ".userInfo"] : {
            uid : currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedID+".date"]: serverTimestamp()
        });

       
      }

    }catch (err){
    }

    setUser(null)
    setUserName("")

    //else it will show user chat
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
          value={username}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      {err && <span>User not found!</span>}
      {user && <div className="chat" onClick={handleSelect}>
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
      {/* <Chats />
      <Chats />
      <Chats /> */}
    </div>

  )
}

export default Search