import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import BoxSx  from './components/box/box';
import Message from './components/message/messaje'
import Procedure from './components/procedure';
import FullName from './components/textgather/fullname';
function App() {

  const procedures = ['Brazilian Butt Lift ', 'Tummy Tuck', 'Breast Lift ', 'Breast Augmentation', 'Face Lift', 'Lipo 360', 'Mummy Make Over']
  const howsoon = ['ASAP', 'One to Three Month', 'In six months ', 'In a Year']
  const [show, setShow] = useState({ secundTextHidden:true, firstTextHidden:false, chooseProcedureHidden: true, howsoonHidden: true, fullNameComp: true, emailHiddenComp:true,  phoneHiddenComp: true });
  let evaluation = useRef({ procedure: '', howSoon: '', FullName: '', email:'', phone:'' })

  useEffect(() => {
    console.log(show);
  }, [show]);

  const setProcedure = (procedureName) => {
    
    if (show.firstTextHidden === false) {
      
      setShow({
        ...show,
        chooseProcedureHidden: false,
        firstTextHidden: true,
      },);
      console.log(evaluation);
    }

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
        fullNameComp: false,
      },);
    }
    else if (show.fullNameComp === false) {
      const varEval = evaluation.current
      evaluation.current = {
        ...varEval,
        FullName: procedureName
      }
      console.log(evaluation);
      setShow({
        ...show,
      
        fullNameComp: true,
        emailHiddenComp:false

      },);
    }

    else if (show.emailHiddenComp === false) {
      const varEval = evaluation.current
      evaluation.current = {
        ...varEval,
        email: procedureName
      }
      console.log(evaluation);
      setShow({
        ...show,
        phoneHiddenComp: false,
        emailHiddenComp: true
      },);

    }

    else if (show.phoneHiddenComp === false) {

      const varEval = evaluation.current
      evaluation.current = {
        ...varEval,
        phone: procedureName
      }
      console.log(evaluation);
      setShow({
        ...show,
        phoneHiddenComp: true,
        firstTextHidden: false
      },);
    }
  }


  return (

    <div className="App">

      <Message show={show.firstTextHidden} key={1} buttonText={'Begin'} name={'This is the text you should show '} startPressed={setProcedure} />
     

     <></>
      {procedures.map(
        (item, i) => (
          <Procedure show={show.chooseProcedureHidden} key={ item+i} name={item} setProcedure={setProcedure}> </Procedure>
        )
      )}
      {howsoon.map(
        (item, i) => (
          <Procedure show={show.howsoonHidden} key={ item + i} name={item} setProcedure={setProcedure}> </Procedure>
        )
      )}
      <FullName type='text' labelName='Full Name' hidden={show.fullNameComp} key={ 2} setProcedure={setProcedure}></FullName>
      <FullName type='email' labelName='Email' hidden={show.emailHiddenComp} key={ 3} setProcedure={setProcedure}></FullName>
      <FullName type='number' labelName='Phone Number' hidden={show.phoneHiddenComp} key={ 4} setProcedure={setProcedure}></FullName>
      <Message show={show.secundTextHidden} key={5} name={'All done'} buttonText= {'Finish'} startPressed={setProcedure} />
    
    </div>
    
  );
}
export default App;


