import React from 'react'
import CropOriginalSharpIcon from '@mui/icons-material/CropOriginalSharp';
import Button from '@mui/material/Button';

function Inputs() {
  return (
    <div className='input'>
      <input type="text" class="no-outline" placeholder='Type message..'/>
      <div className="send">
        <input type="file" id='file' style={{display:'none'}}/>
        <label htmlFor="file">
          <CropOriginalSharpIcon color='secondary'/>
        </label>
        <Button variant="text" color='secondary'>Send</Button>
      </div>
    </div>
  )
}

export default Inputs