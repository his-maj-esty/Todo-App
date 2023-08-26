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
  const [username,setUsername] = useState("");
return(
  <>
  <Router>
    <AppBar username={username} setUsername={setUsername}></AppBar>
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login setUsername={setUsername}/>}></Route>
      <Route path='/signup' element={<Signup setUsername={setUsername}></Signup>}></Route>
      <Route path='/alltodos' element={<Todos/>}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
