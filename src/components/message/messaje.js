import React from 'react';

import Button from '@mui/material/Button';


function messaje(props) {
  const { show, startPressed, name, buttonText } = props

  return (
    <div className='Text' hidden={show} >
      <h1>{name}</h1>
      <Button onClick={() => startPressed('')} className='button' variant="contained">{buttonText}</Button>

    </div>
  );
}
//
export default messaje;