import React from 'react'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chats from './Chats';

function Search() {
  return (
    <div className='search'>
      <FormControl fullWidth variant="standard">
        <Input
          id="input-with-icon-adornment"
          color="warning"
          placeholder='Find User'
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <div className="chats">
          <Grid container wrap="nowrap" spacing={2} >
            <Grid item>
              <Avatar className='profileImage' sx={{ width: 56, height: 56 }}>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography className='senderName' noWrap>hello</Typography>
              <Typography noWrap className='senderMsg'>hello</Typography>
            </Grid>
          </Grid>
      </div>
      <Chats/>
    </div>

  )
}

export default Search