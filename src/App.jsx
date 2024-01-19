import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavItems from './components/navItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavItems />
     <Outlet />
    </>
  )
}

export default App
