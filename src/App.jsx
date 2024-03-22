import './App.css';
import {  Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Form from './Components/Form'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
       <Route path ='/form' element={<Form/>}/>

    </Routes>
    </div>
  );
}

export default App;
