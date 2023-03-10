import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Procedure.css';


function Procedure(props) {


  const name = props.name;
  return (
    <>
      <Button hidden={props.show} onClick={() => props.setProcedure(name)} className='Procedure' variant="outline-primary">{name}</Button>{' '}
      {/* <Button variant="outline-secondary">Secondary</Button>{' '}
      <Button variant="outline-success">Success</Button>{' '}
      <Button variant="outline-warning">Warning</Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
       */}
    </>
  );
}

export default Procedure;