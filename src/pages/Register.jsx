import React from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Register() {
  return (
    <div className="container">
    <form>
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
        <input className='file' type="file" />
      </div>
      <div className="login">
        <Button  variant="contained" color="warning">Sign up</Button>
      </div>
      <p>Already have an account?<a href="">Login</a></p>
    </form>
    </div>
  )
}

export default Register