import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Procedure from './components/procedure';
function App() {

  const procedures = ['Brazilian Bud Lift ', 'Tummy Tuck', 'Breast Lift ', 'Breast Augmentation']


  return (
    <div className="App">
      {procedures.map(
        (item) => (
          <Procedure name={item}></Procedure>
        )
      )}
    </div>
  );
}

export default App;
