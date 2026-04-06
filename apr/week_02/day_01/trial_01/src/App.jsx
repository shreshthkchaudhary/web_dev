import './App.css'
import Heading from './Components/Heading'
import SkillSet from './Components/SkillSet'
import Avt from './Components/Avt'

function App() {
  return (
    <div class='max-w-[1000px] m-[10px] p-[10px] flex border-1 rounded-[25px] bg-gray-100 border-gray-400'>
      <div class="flex-[70%]">
        <Heading />
        <SkillSet/>
      </div>
      <div class="flex-[10%] mb-[50px] flex items-center">
        <Avt/>
      </div>
      
    </div>
  )
}

export default App
