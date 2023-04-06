import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './FullName.css'

export default function Fullname(props) {
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    //console.log(event.target.value);
    setMessage(event.target.value);
  };
  return (
    <div hidden={props.hidden} className='Text'>
      <TextField 
        sx={{
          "& input": {
            color: 'white',
          },
          "& .MuiFormLabel-root": {
            color: 'secondary.main'
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: 'white'
          }
        }}
        fullWidth
        required
        margin='normal'
        type={props.type}
        label={props.labelName}
        onChange={handleChange}
        variant="outlined"
        focused
     />
      <Button onClick={() => props.setProcedure(message)} className='button' variant="contained">Continue</Button>
    </div>
  );
} 