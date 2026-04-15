import { StrictMode } from 'react'
// import { useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContext } from './Components/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  //  Step 2 - Provider
  <ThemeContext.Provider>
    <App/>
  <ThemeContext.Provider/>

)
