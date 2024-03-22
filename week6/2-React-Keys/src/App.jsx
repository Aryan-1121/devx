import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let count =4;
function App() {

  const [todos, setTodos]= useState([{
    id: 1,
    title:"go to gym ",
    description:"8-9 pm "
  },{
    id: 2,
    title:"go to bed  ",
    description:"early to bed  "
  },{
    id: 3,
    title:"wake up  ",
    description:"wake up early in the morning !! "
  }])

  function addTodo(){
    setTodos([...todos, {
      id: count++,
      title: Math.random(),
      description: Math.random()+' description'
    }])
    console.log(count);
  }

  return (
    <>
      <button onClick={addTodo}> add todo </button>
      {todos.map( function(todo){
        return<Todo title= {todo.title} description={todo.description} />
      } )}
     
    </>
  )
}


function Todo({title, description}){
  return  <div>
    <h2>{title}</h2>
    <h4>{description}</h4>   
  </div>
}


export default App
