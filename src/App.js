import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';

import Procedure from './components/procedure';
import FullName from './components/fulname/fullname';
function App() {

  const procedures = ['Brazilian Bud Lift ', 'Tummy Tuck', 'Breast Lift ', 'Breast Augmentation']
  const howsoon = ['ASAP', 'One to Three Month', 'In six months ', 'In a Year']
  const [show, setShow] = useState({ chooseProcedureHidden: false, howsoonHidden: true, fullHameHidden: true });
  let evaluation = useRef({ procedure: '', howSoon: '', FullName: '' })

  useEffect(() => {
    console.log(show);

  }, [show]);


  const setProcedure = (procedureName) => {

    if (show.chooseProcedureHidden === false) {

      const varEval = evaluation.current
      evaluation.current = {
        ...varEval,
        procedure: procedureName
      }
      setShow({
        ...show,
        howsoonHidden: false,
        chooseProcedureHidden: true,
      },);
      console.log(evaluation);
    }

    else if (show.howsoonHidden === false) {

      const varEval = evaluation.current
      evaluation.current = {
        ...varEval,
        howSoon: procedureName
      }
      console.log(evaluation);
      setShow({
        ...show,
        howsoonHidden: true,
        fullHameHidden: false,

      },);

    }
    else if (show.fullHameHidden === false) {

      const varEval = evaluation.current
      evaluation.current = {
        ...varEval,
        FullName: procedureName
      }
      console.log(evaluation);
      setShow({
        ...show,
        howsoonHidden: true,
        fullHameHidden: true,

      },);

    }
  }
  return (
    <div className="App">
      {procedures.map(
        (item, i) => (
          <Procedure show={show.chooseProcedureHidden} key={item + i} name={item} setProcedure={setProcedure}> </Procedure>
        )
      )}

      {howsoon.map(
        (item, i) => (
          <Procedure show={show.howsoonHidden} key={item + i} name={item} setProcedure={setProcedure}> </Procedure>
        )
      )}

      <FullName hidden={show.fullHameHidden} key='11111' setProcedure={setProcedure}></FullName>

    </div>
  );
}

export default App;
