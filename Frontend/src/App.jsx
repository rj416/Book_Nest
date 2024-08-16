import React from 'react';
import Home from './home/Home';
import { Routes ,Route} from "react-router-dom";
import Coursess from './coursess/Coursess';
import Signup from './components/Signup';




function App() { 
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Coursess/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
    
    </>
  );
}

export default App;
