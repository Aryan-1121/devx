import { memo, useCallback, useEffect, useMemo, useState } from "react"


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


// function App(){
//   const [todos, setTodos] = useState([]);
//   useEffect(()=>{
//     fetch('https://sum-server.100xdevs.com/todos')
//     .then(async function(res){
//       const json = await res.json();
//       setTodos(json.todos);
//     })
//   }, [])      // empty dependency array means do this only once no matter how many times render happen 

//  //DEPENDENCY ARRAY - when should the callback function run 
//  // DEPENDENCY ARRAY -> takes state variable as a input   

// //  if we don't use useEffect it will infinitely keep changing bcs setTodos will change and App will re-render again then again setTodos will get updated and so on ..
//   return(
//     <div>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/> ) }
//     </div>
//   )

//   function Todo({title, description}){
//     return <div>
//       <h1> {title}</h1>
//       {description}
//     </div>
//   }

// }





// A Component that takes a todo id as input and fetches that todo from an endpoint and renders it 


// function App() {

//   return <div>
//     <Todo id={2} />
//   </div>


// }



// function Todo({ id }) {

//   const [todo, setTodo] = useState([]);


//   useEffect(() => {

//     fetch("https://sum-server.100xdevs.com/todo?id="+ id)
//       .then(async (res) => {
//         const json = await res.json();
//         setTodo(json.todo);
//       })

//   }, []);


//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//       {todo.description}
//   </div>
// }







// function App(){

//   const [button, setbutton] = useState(1);



//   return <div>
//     <button onClick={()=>{
//       setbutton(1);
//     }}>1</button>
//     <button onClick={()=>{
//       setbutton(2);
//     }}>2</button>
//     <button onClick={()=>{
//       setbutton(3);
//     }}>3</button>
    
//     <button onClick={()=>{
//       setbutton(4);
//     }}>4</button>
//     <button onClick={()=>{
//       setbutton(5);
//     }}>5</button>

//     <Todo id={button} />
//   </div>
// }




// function Todo({ id }) {
// console.log(id);
//     const [todo, setTodo] = useState([]);
  
  
//     useEffect(() => {
  
//       fetch("https://sum-server.100xdevs.com/todo?id="+ id)
//         .then(async (res) => {
//           const json = await res.json();
//           setTodo(json.todo);
//         })
  
//     }, [id]);
  
  
//     return <div>
//       <h1>
//         {todo.title}
//       </h1>
//         {todo.description}
//     </div>
//   }






      //                      USE MEMEO  -> can br replaced using useEffect

    

//   function App(){
//     const [counter, setCounter] = useState(0); 
//     const [inputValue, setInputValue] = useState(1);

//     let count =0; 
//     for(let i =1; i<=inputValue; i++){
//       count+=i;
//     }

//     return <div>
//       <input onChange={(e)=>{
//         setInputValue(e.target.value);
//       }}
//       placeholder="find sum from 1 to n "></input>
//       <br />
//       Sum fromo 1 to {inputValue} is {count}
//       <br />


// {/* when we click tis button it causes re-render that will make above code run too, even if above thing is not changed  */}
//       <button onClick={()=>{
//         setCounter(counter +1);
//       }}>Counter({counter})</button>
//     </div>
// }






// function App(){
//   const [counter, setCounter] = useState(0); 
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(()=>{
//     let finalCount =0;
//     for(let i =1; i<=inputValue; i++){
//       finalCount+=i;
//     }
//     return finalCount;
//   },[inputValue]) 

//   return <div>
//     <input onChange={(e)=>{
//       setInputValue(e.target.value);
//     }}
//     placeholder="find sum from 1 to n "></input>
//     <br />
//     Sum fromo 1 to {inputValue} is {count}
//     <br />


// {/* when we click tis button it causes re-render that will make above code run too, even if above thing is not changed  */}
//     <button onClick={()=>{
//       setCounter(counter +1);
//     }}>Counter({counter})</button>
//   </div>

//   }










//                                    USE CALLBACK   -> need to memoize functions




function App(){
  const [counter, setCounter] = useState(0); 

  // const inputFn = ()=>{
  //   console.log('hi from inpunt fn ');
  // }
  // the above snippet will make ButtonComponent re-render even if its in memo, bcs js cant tell differnce b/w 2 fn/objcts so will mark as new hence re-render occur          -> to avoid this we use useCallback with some dependency array

  const inputFn = useCallback(()=>{
    console.log('hi from inpunt fn ');
  },[]);


  return <div>
    <ButtonComponent inputFn={inputFn} />

    <button onClick={()=>{
      setCounter(counter +1);
    }}> counter {counter}</button>

    
  </div>

}

const ButtonComponent = memo(({inputFn})=>{
  console.log('child re-rederd');
  return <div>
    {/* <button> Button clicked !!</button> */}
  </div>
})













export default App
