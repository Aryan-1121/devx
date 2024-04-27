import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <button> Home</button>


      <button> My Network </button>
      <button> Jobs</button>
      <button> Messaging</button>
      <button> Notification</button>

      
      <button> Me </button>
    </div>
  )
}

export default App
