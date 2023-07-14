import React, { useContext } from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Messages from './Messages';
import Inputs from './Input'
import { ChatContext } from '../context/ChatContext';

function Chat() {
  
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data?.user?.displayName}</span>
        <div className="chatIcons">
          <VideoCallIcon fontSize='large' color='secondary'/>
          <MoreHorizSharpIcon fontSize='large' color='secondary'/>
        </div>
      </div>
      <Messages/>
      <Inputs/>
    </div>
  )
}

export default Chat