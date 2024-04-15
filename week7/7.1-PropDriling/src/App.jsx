import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count}/>
      <Buttons count={count} setCount={setCount} />

    </div>
  )
}



function Count({ count }) {
  return <div>
    {count}
  </div>
}


function Buttons({ count, setCount}) {
  return <div>

    <button onClick={() => {
      setCount(count+1)
    }}> increase </button>


    <button onClick={() => {
      setCount(count-1)

    }}> decrease  </button>  </div>
}


export default App
