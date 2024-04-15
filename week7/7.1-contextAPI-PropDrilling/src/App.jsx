import React, { Suspense, useState, lazy } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import { Landing } from './components/Landing'

// import { Dashboard } from './components/Dashboard'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))


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
          {/* we use Suspense fallback to tell browser what to show until the content in lazily loading (fetching) otherwise react wont know what to show while loading and will break  */}
          <Route path='/dashboard' element={<Suspense fallback='Loading...'><Dashboard /> </Suspense>} />
          <Route path='/' element={<Suspense fallback='LOADING $$$$' >  <Landing />  </Suspense>} />
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
