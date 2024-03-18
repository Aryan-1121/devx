// getteing props as todos
// todos = [
//     {
//         title: "gjototo gym ",
//         description : " aldfja a;fd a "
//     }
// ]



export function Todos({todos}){
    return <div>

        {/*  how to rener the given array (todos) */}
        {
            todos.map((todo)=>{
                return <div>
                    <h1> {todo.title} </h1>
                    <h2>{todo.description} </h2>
                    <button>{todo.completed ==true ? "Completed" : "Mark as Completed "} </button> 
                </div>
            })
        }

        {/* <h1> Go to gym  </h1>
        <h2>Gto yo gyn 8-9 </h2>
        <button>mark as done </button> */}
    </div>
}