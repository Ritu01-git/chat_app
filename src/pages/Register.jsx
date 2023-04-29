import React from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

function Register() {
  return (
    <div className="container">
      <form>
        <MarkChatUnreadIcon className='icon' color='secondary' fontSize='large'/>
        <Typography className='heading' variant="h5" gutterBottom>
          Create Account..
        </Typography>
        <div className='input'>
          <TextField
            className="textfield" color="warning" id="outlined-secondary" label="Username" variant="outlined" margin="normal"
          />
          <TextField
            className="textfield" color="warning" id="outlined-secondary" label="Email" variant="outlined" margin="normal"
          />
          <TextField
            className="textfield" color="warning" id="outlined-secondary" label="Password" variant="outlined" margin="normal"
          />
          <div className="image">
            <input style={{ display: "none" }} className='file' id='file' type="file" />
            <PersonIcon color='secondary' />
            <label htmlFor="file">Add Image</label>

          </div>
        </div>
        <div className="login">
          <Button variant="contained" color="warning">Sign up</Button>
        </div>
        <p>Already have an account?<a href="Login.jsx">Login</a></p>
      </form>
    </div>
  )
}

export default Register