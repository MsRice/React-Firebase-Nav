import './App.css';
import Nav from './components/Nav'
import { auth } from './firebase/init'
import { BrowserRouter as Router , Routes, Route ,Link} from 'react-router-dom';
import Home from './pages/Home';
import React, { useState } from 'react';
import { signOut } from 'firebase/auth';

function App() {
  const [reg_form , setReg_form] = useState(false)
  const [user , setUser] = React.useState({})


  function login(){
    toggle_registration('login')
  }

  function registration(){
    toggle_registration('registration')
  }
  function toggle_registration(form_opt){
      setReg_form([true , form_opt])
      console.log(reg_form , form_opt)     
    }   
    
    function logout(){
      setReg_form(false)
      signOut(auth)
      setUser({})


    }
  
  return (
    
    <>
    <Router>
      <Nav registration={registration} login={login} logout={logout} reg_form={reg_form} user= {user}/>
      <Home reg_form={reg_form} setReg_form= {setReg_form} user={user} setUser={setUser}/>
    </Router>
    </>
  );
}

export default App;
