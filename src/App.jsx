import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './component/homepage'
import SignUp from './component/signup'
import Login from './component/login'

function App() {
  const [count, setCount] = useState(0)

  return (
<section>
  <Routes>
    <Route index element={<Login />} />
    <Route path='signUp' element={<SignUp />} />
    <Route path='home' element={<Homepage />} />
  </Routes>
</section>
  )
}


export default App;
