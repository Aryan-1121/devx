import { useEffect, useState } from "react"


// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <button onClick={function(){
//         setCount(count+1);
//       }}> click {count} </button>
//     </>
//   )
// }


function App(){
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todos')
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })
  }, [])      // empty dependency array means do this only once no matter how many times render happen 

 //DEPENDENCY ARRAY - when should the callback function run 
 // DEPENDENCY ARRAY -> takes state variable as a input   

//  if we don't use useEffect it will infinitely keep changing bcs setTodos will change and App will re-render again then again setTodos will get updated and so on ..
  return(
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/> ) }
    </div>
  )

  function Todo({title, description}){
    return <div>
      <h1> {title}</h1>
      {description}
    </div>
  }

}






































export default App
