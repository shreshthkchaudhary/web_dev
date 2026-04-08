import { useState } from 'react'
import Counter from './Components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Trial 01</h1>
      <Counter/>
    </div>
  )
}

export default App
