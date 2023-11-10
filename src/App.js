import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
 
function App() {
  
  const [login,setlogin] =useState(false);
  
  const Logintitle = 'Welcome back';
  const desc1 = 'Build skills for today, tomorrow, and beyond.';
  const desc2 = 'Education to future-proof your career.';
  const SignIntitle = `Join the million's learning to code with studyNotion for free`;

  return (
    <div className="App">

      <Navbar login={login} setlogin={setlogin}/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login title={Logintitle} desc1={desc1} desc2={desc2} formtype='login' login={login} setlogin={setlogin}/>} />
        <Route path='/signup' element={<SignUp title={SignIntitle} desc1={desc1} desc2={desc2} formtype='signup' login={login} setlogin={setlogin}/>} />
        <Route path='/dashboard' element={login ? <Dashboard/> : ''} />
      </Routes>
    </div>
  );
}

export default App;
