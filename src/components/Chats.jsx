import React from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
function Chats() {
  return (
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
  )
}

export default Chats