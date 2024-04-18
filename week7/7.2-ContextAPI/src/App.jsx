import { useState } from 'react'
import { CountContext } from './context'
import { useContext } from 'react'

// =>  CONTEXT API  does not make rendering more perfomant  => NOOOOOOOOO
//  => IT JUST MAKE CODE LOOK CLEANER (THAT IS GET RID OF PROP DRILLING)

// TO SUMMARISE THE PROBLEM - > it solves prop drilling but still re-render the children which is not using the state variable which got updated

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


function Count({ setCount }) {
  console.log('couter got re-render');
  // PROBLEM : why does this compoonent gets re-render even though it is not using the state variable which is updating while clicking on the inc/dec button
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
