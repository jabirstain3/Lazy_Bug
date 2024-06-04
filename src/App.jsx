// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Outlet />
    </div>
  )
}

export default App;
