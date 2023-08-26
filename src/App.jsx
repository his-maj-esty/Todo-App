import { useEffect, useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo';
import {AppBar} from "./AppBar";
import { updateTodo, deleteTodo, addTodo } from './api'
import { Login } from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { Signup } from './Signup';
import { Todos } from './Todo';


function App() {
return(
  <Router>
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/alltodos' element={<Todos/>}></Route>

   </Routes>
   </Router>
  );
}

export default App;
