import {  useState } from 'react';
import { useEffect } from 'react';
// import './App.css';
import "./index.css";
import { Header } from './components/Header';
import { Tasklist } from './components/Tasklist';
import { AddTask } from './components/AddTask';
// import { Footer } from './components/Footer';

function App() {

const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
const [todo,setTodo] = useState({});

useEffect( () => {
  localStorage.setItem("taskList", JSON.stringify(taskList));
},[taskList])
  
  return (
    <div >
      <Header />
      <AddTask tasks = {taskList} setTask = {setTaskList} todo = {todo} setTodo = {setTodo}/>
      <Tasklist tasks = {taskList} setTask = {setTaskList} todo = {todo} setTodo = {setTodo}/>

    </div>
  );
}

export default App;
