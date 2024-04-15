import { useState } from 'react'


            //          PROP DRILLING IS A PROBLEM -> solution -contex api, state management (redux, recoil)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} setCount={setCount} />
      {/* <Buttons count={count} setCount={setCount} /> */}

    </div>
  )
}

//  PROBLEM : -lets suppose Buttons component needs to get called from COunt component -> now here even Count component only needs 'count' as prop but now bcs Buttons component needs both 'count' as well as 'setCount' now Count component also need to take both state variable as prop => not good to look at, slightly not appealing to eye, there might be case when least common ancestor of a state variable is also very far from the actual component that needs it so all the component in b/w will have to pass down those state variable as props even when they nothing to do with it  

function Count({ count, setCount }) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount} />

  </div>
}


function Buttons ({ count, setCount}) {
  return <div>

    <button onClick={() => {
      setCount(count+1)
    }}> increase </button>


    <button onClick={() => {
      setCount(count-1)

    }}> decrease  </button>  </div>
}


export default App
