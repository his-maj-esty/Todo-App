import { useEffect, useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo';
import {AppBar} from "./AppBar";
import { updateTodo, deleteTodo, addTodo } from './api'

function App() {
return(
    <AppBar></AppBar>
);
}

export default App;
