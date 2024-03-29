import React, { useContext, useEffect, useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { CloseFullscreen } from '@mui/icons-material';
const Message = ({message}) => {

  console.log(message)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [message]);

  const date = new Date(message.date.seconds * 1000);
  
  console.log(date.toLocaleDateString())

  return (
    <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <Avatar alt="Remy Sharp" src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} />
        <span>{date.toLocaleDateString()}</span>
      </div>
      <div className="messageBody">
        <p>{message.text}</p>
      </div>

    </div>
  )
}

export default Message