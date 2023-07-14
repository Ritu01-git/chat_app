import React, { useContext } from 'react'
import FaceIcon from '@mui/icons-material/Face';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Button from '@mui/material/Button';
import { getAuth, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      {/* <MarkChatUnreadIcon className='icon' color='secondary' fontSize='large'/> */}
      <div className="nav_container">
        <div className='profile'>
        <img src={currentUser?.photoURL} alt="" className='imageOfUser'/>
          <div className="name">
             {currentUser?.displayName}
          </div>
          </div>
          <div>
          <Button variant="contained" color="warning" onClick={() => {signOut(auth)}}>Logout</Button>
          </div>

      </div>
    </div>
  )
}

export default Navbar