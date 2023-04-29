import React from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Messages from './Messages';
import Inputs from './Input'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Ritu</span>
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