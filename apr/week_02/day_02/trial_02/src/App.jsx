import { useState } from 'react'
import Post from './Components/Post'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Post/>
    </div>
  )
}

export default App
