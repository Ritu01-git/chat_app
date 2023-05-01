import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, increment } from "firebase/firestore";
import { getFirestore, collection, setDoc } from "firebase/firestore";
import { auth, storage, db } from '../firebase';
import { useNavigate } from "react-router-dom";




function Register() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()




  // submitting the form..
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[2].value;
    const password = e.target[4].value;
    const file = e.target[6].files;
    console.log(displayName)
    console.log(email)
    console.log(password)
    console.log(file)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storage = getStorage();

      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg'
      };
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, 'images/' + displayName);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate('/home')
          });
        }
      );
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <MarkChatUnreadIcon className='icon' color='secondary' fontSize='large' />
        <Typography className='heading' variant="h5" gutterBottom>
          Create Account..
        </Typography>
        <div className='input'>
          <TextField
            color="warning" id="outlined-secondary" label="Username" variant="outlined" margin="normal"
          />
          <TextField
            type='email' color="warning" id="outlined-secondary" label="Email" variant="outlined" margin="normal"
          />
          <TextField
            color="warning" id="outlined-secondary" label="Password" variant="outlined" margin="normal"
          />
          <div className="image">
            <input style={{ display: "none" }} className='file' id='file' type="file" />
            <PersonIcon color='secondary' />
            <label htmlFor="file">Add Image</label>

          </div>
        </div>
        <div className="login">
          <Button variant="contained" color="warning" type="submit">Sign up</Button>
        </div>
        <p>Already have an account?<a href="Login.jsx">Login</a></p>
        {err && <span>Something went wrong</span>}
      </form>
    </div>
  )
}

export default Register