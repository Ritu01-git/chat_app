import React from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

function Login() {
    return (
        <div className="container">
            <form>
            <MarkChatUnreadIcon className='icon' color='secondary' fontSize='large'/>
                <Typography className='heading' variant="h5" gutterBottom>
                    Login..
                </Typography>

                <div className='input'>
                    <TextField
                        className="textfield" color="warning" id="outlined-secondary" label="Email" variant="outlined" margin="normal"
                    />
                    <TextField
                        className="textfield" color="warning" id="outlined-secondary" label="Password" variant="outlined" margin="normal"
                    />
                </div>
                <div className="login">
                    <Button variant="contained" color="warning">Sign in</Button>
                </div>
                <p>Don't have an account?<a href="Login.jsx">Register</a></p>
            </form>
        </div>
    )
}

export default Login