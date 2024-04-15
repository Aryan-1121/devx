import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>

      <div style={{ background: 'black', color: 'white' }}>
        <h1 > TOP BAR </h1>
      </div>

      {/* <button onClick={() => {
          // window.location.href = '/'      //this will reload whole file (get file from server ) (hard refresh the page), we dont want this -> SOLUTION: useNavigate()

          navigate('/')
        }} > Landing</button>

        <button onClick={() => {
          // window.location.href = '/dashboard'
          navigate('/dashboard')
        }}> Dashboard </button> */}


      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


const AppBar = () => {
  const navigate = useNavigate();
  //useNavigate expects to make sure this hook inside BrowserRouter
  return <div>
    <button onClick={() => {
      // window.location.href = '/'      //this will reload whole file (get file from server ) (hard refresh the page), we dont want this -> SOLUTION: useNavigate()

      navigate('/')
    }} > Landing</button>

    <button onClick={() => {
      // window.location.href = '/dashboard'
      navigate('/dashboard')
    }}> Dashboard </button>


  </div>
}

export default App
