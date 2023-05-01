import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import './global.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
<div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
