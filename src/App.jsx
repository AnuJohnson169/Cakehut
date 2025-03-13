import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
