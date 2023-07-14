import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

// ritu2@gmail.com (abcde123kkkk)

function Login() {
    const [err, setErr] = useState(false)
    const navigate = useNavigate()


    // submitting the form..
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[2].value;
        console.log(email)
        console.log(password)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setErr(true)
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <MarkChatUnreadIcon className='icon' color='secondary' fontSize='large' />
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
                    <Button variant="contained" color="warning" type='submit'>Sign in</Button>
                </div>
                <p>Don't have an account?<a href="Register">Register</a></p>
            </form>
            {err && <Alert className='error' severity="error">Something Went Wrong</Alert>}
        </div>
    )
}

export default Login