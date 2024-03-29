import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import './global.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)

  // const authentication = ({children}) => {
  //   if(!currentUser){
  //     return <Navigate  to="/login"/>
  //   }
  // }

  return (

    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={currentUser ? <Home /> : <Login />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
