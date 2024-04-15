import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'


//          PROP DRILLING IS A PROBLEM (anti pattern -> try to avoid)
// -> solution -contex api, state management (redux, recoil)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <CountContext.Provider value={{count, setCount }}> */}
      <CountContext.Provider value={count }>
        <Count setCount={setCount}/>
        {/* <Buttons count={count} setCount={setCount} /> */}
      </CountContext.Provider>
    </div>
  )
}

//  PROBLEM : -lets suppose Buttons component needs to get called from COunt component -> now here even Count component only needs 'count' as prop but now bcs Buttons component needs both 'count' as well as 'setCount' now Count component also need to take both state variable as prop => not good to look at, slightly not appealing to eye, there might be case when least common ancestor of a state variable is also very far from the actual component that needs it so all the component in b/w will have to pass down those state variable as props even when they nothing to do with it  

//      SOLUTION 
//  the goal of the context api is to teleport the prop(s) from one component to another w/o passing it down to the chain


function Count({ setCount }) {
  return <div>
    <CountRenderer  />
    <Buttons setCount={setCount} />

  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return <div>

    <button onClick={() => {
      setCount(count + 1)
    }}> increase </button>


    <button onClick={() => {
      setCount(count - 1)

    }}> decrease  </button>  </div>
}


export default App
