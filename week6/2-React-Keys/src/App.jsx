import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//  KEY 

// let count =4;
// function App() {

//   const [todos, setTodos]= useState([{
//     id: 1,
//     title:"go to gym ",
//     description:"8-9 pm "
//   },{
//     id: 2,
//     title:"go to bed  ",
//     description:"early to bed  "
//   },{
//     id: 3,
//     title:"wake up  ",
//     description:"wake up early in the morning !! "
//   }])

//   function addTodo(){
//     setTodos([...todos, {
//       id: count++,
//       title: Math.random(), 
//       description: Math.random()+' description'
//     }])
//     console.log(count);
//   }

//   return (
//     <>
//       <button onClick={addTodo}> add todo </button>
//       {todos.map( function(todo){
//         return<Todo key={todo.id} title= {todo.title} description={todo.description} />
//       } )}

//     </>
//   )
// }


// function Todo({title, description}){
//   return  <div>
//     <h2>{title}</h2>
//     <h4>{description}</h4>   
//   </div>
// }


// // const Todo = React.memo(
// //   function Todo({title, description}){
// //     return  <div>
// //       <h2>{title}</h2>
// //       <h4>{description}</h4>   
// //     </div>
// //   }
// // )







//        WRAPPER COMPONENT

// you can create a wrapper card component that takes another component as an input/props


// this is just an example of wrapper component we don't actually use it in this way 


// function App() {
//   return <div>

//     <CardWrapper innerComponent={<TextComponent />} />
//     <CardWrapper innerComponent={<TextComponent />} />
//     <CardWrapper innerComponent={<TextComponent2 />} />


//   </div>
// }



// function CardWrapper({ innerComponent }) {
//   return <div style={{border:'2px solid black'}} >
//     {innerComponent}
//   </div>
// }





// function TextComponent() {
//   return <div>
//     hii there from Text Component
//   </div>
// }


// function TextComponent2() {
//   return <div>
//     this is from 2nd Text Component
//   </div>
// }





//    actually this is how we use Card wrapper 

function App() {
  return <div>
    <CardWrapper>
      hi there
    </CardWrapper>   

    <CardWrapper>
      hi there again 
    </CardWrapper>
    

    {/*  we can also render another component/function within it  */}

    <CardWrapper>
      <TextComponent />
    </CardWrapper>

  </div>
}



function CardWrapper({ children }) {
  return <div style={{ border: '5px solid black' }} >
    {children}
  </div>
}



function TextComponent() {
  return <div>
    hii there from Text Component
  </div>
}








export default App
