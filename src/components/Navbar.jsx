import React from 'react'
import FaceIcon from '@mui/icons-material/Face';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <div className='navbar'>
      {/* <MarkChatUnreadIcon className='icon' color='secondary' fontSize='large'/> */}
      <div className="nav_container">
          <div className="name">
            <FaceIcon/> Name
          </div>

      </div>
    </div>
  )
}

export default Navbar