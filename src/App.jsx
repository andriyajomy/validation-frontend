import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
<Route path='/home' element={<Home/>}/>

    </Routes>
    </div>
  );
}

export default App;
