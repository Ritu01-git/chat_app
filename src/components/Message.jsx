import React from 'react'
import Avatar from '@mui/material/Avatar';
function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <span>just now</span>
      </div>
      <div className="messageBody">
        {/* <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg" alt="" /> */}
        <p>Hello my name is ritu,</p>
      </div>

    </div>
  )
}

export default Message