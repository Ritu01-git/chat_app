import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Chats from '../components/Chats'
import Button from '@mui/material/Button';


function Home() {
  return (
    
    <div className="home">
            <Sidebar/>
            <Chat/>
    </div>
  )
}

export default Home