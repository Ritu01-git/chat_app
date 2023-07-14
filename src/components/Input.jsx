import React, { useContext, useState } from 'react'
import CropOriginalSharpIcon from '@mui/icons-material/CropOriginalSharp';
import Button from '@mui/material/Button';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { v4 as uuid } from "uuid";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Inputs() {

  const [text, setText] = useState("")

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  const handleSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      })
    })

    await updateDoc(doc(db,"userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"] : {
        text
      },
      [data.chatId + ".date"] : serverTimestamp(),
    })

    await updateDoc(doc(db,"userChats", data.user.uid), {
      [data.chatId + ".lastMessage"] : {
        text
      },
      [data.chatId + ".date"] : serverTimestamp(),
    })

    setText("");
  }
  return (
    <div className='input'>
      <input type="text" class="no-outline" placeholder='Type message..' value={text} onChange={e=> setText(e.target.value)}/>
      <div className="send">
        <input type="file" id='file' style={{display:'none'}}/>
        <label htmlFor="file">
          <CropOriginalSharpIcon color='secondary'/>
        </label>
        <Button variant="text" color='secondary' onClick={handleSend}>Send</Button>
      </div>
    </div>
  )
}

export default Inputs