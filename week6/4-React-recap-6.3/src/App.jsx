import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // document.getElementbyId

  console.log('this is from APp.jsx');      // whenever state var changes whole component re-renders
  return (
    <div>
      <button onClick={()=>{
        setCount(count +1);
      }}>
        count -{'>'} {count}
      </button>

    </div>
  )
}

export default App
