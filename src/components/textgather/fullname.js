import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './FullName.css'

export default function Fullname(props) {
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setMessage(event.target.value);
  };
  return (
    <div hidden={props.hidden} className='FullName'>
      <TextField
        fullWidth
        required
        type={props.type}
        label={props.labelName}
        onChange={handleChange}
        color="primary"
        focused />
      <Button onClick={() => props.setProcedure(message)} className='button' variant="contained">Continue</Button>
    </div>
  );
} 