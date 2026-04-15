// import { useState } from 'react'
import './App.css'
import Trial from './Components/Trial'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <p>
🔵 useState — "Reactive data"
Jab bhi value change ho aur UI update bhi chahiye ho.
<br />
Use karo jab: input values, toggles, fetched data, anything visible in UI.

<br /><br />

🟡 useRef — "Mutable box, no drama"
Value ya DOM node store karo bina re-render trigger kiye.
<br />
Use karo jab: focus/scroll control, storing previous values, setTimeout/interval IDs.

<br /><br />

🟢 useEffect — "Bahar ki duniya se baat karo"
Component render hone ke baad kuch karna ho — API call, subscription, DOM manipulation.
<br />
Dependency array rules:
[]          → sirf mount pe ek baar
[value]     → jab bhi 'value' change ho
nothing     → har render ke baad (avoid this usually)

<br /><br />

Ek Line Summary
<br />
→ useState = "UI mein dikhana hai" <br />→ useRef = "yaad rakhna hai, dikhana nahi" <br />→ useEffect = "render ke baad kuch karna hai"
      </p>
      <Trial/>
    </div>
  )
}

export default App
