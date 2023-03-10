import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';

import Procedure from './components/procedure';
function App() {

  const procedures = ['Brazilian Bud Lift ', 'Tummy Tuck', 'Breast Lift ', 'Breast Augmentation']
  const howsoon = ['ASAP', 'One to Three Month', 'In six months ', 'In a Year']
  const [show, setShow] = useState({ procedure: false, howsoonShow: true });

  const evaluation = {
    procedure: '',
    fullname: '',
    telephone: '',
    email: '',
    howsoon: '',

  }
  useEffect(() => {
    console.log(show);
   
  }, [show]);

  const setHowSoon = (howsoon) => {

    evaluation.howsoon = howsoon;
    console.log(evaluation);
    setShow({
      ...show,
      howsoonShow: true,

    },);

  }

  const setProcedure = (procedureName) => {

    evaluation.procedure = procedureName;
    console.log(evaluation);
    setShow({
      ...show,
      procedure: true,
      
    }, );

  }
  return (
    <div className="App">
      {procedures.map(
        (item, i) => (
          <Procedure show= {show.procedure} key={item + i} name={item} setProcedure={setProcedure}> </Procedure>
        )
      )}

      {howsoon.map(
        (item, i) => (
          <Procedure show={show.howsoonShow} key={item + i} name={item} setProcedure={setProcedure}> </Procedure>
        )
      )}




    </div>
  );
}

export default App;
