import React, { useEffect, useState, useContext } from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { onSnapshot } from 'firebase/firestore';
import { AuthContext } from "../context/AuthContext";
import { db } from '../firebase';
import { doc } from "firebase/firestore";
import { ChatContext } from '../context/ChatContext';



function Chats() {
  const [chats, setChats] = useState([])

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)


  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats()
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  }

  console.log(Object.entries(chats))
  return (
    <div >
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
         <div className="chats">
        <Grid container wrap="nowrap" spacing={2} key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <Grid item>
            <Avatar className='profileImage' src={chat[1].userInfo?.photoURL} sx={{ width: 56, height: 56 }}></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography className='senderName' noWrap>{chat[1].userInfo.displayName}</Typography>
            <Typography noWrap className='senderMsg'>{chat[1].lastMessage?.text}</Typography>
          </Grid>
        </Grid>
        </div>
      ))}
    </div>
  )
}

export default Chats