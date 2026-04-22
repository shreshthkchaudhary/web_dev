import { useState } from 'react'
// import Nav from './Components/Nav'
import './App.css'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Nav/> */}
      <NavBar/>
      
    </div>
  )
}

export default App
