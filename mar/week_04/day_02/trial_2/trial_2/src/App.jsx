import Greet from "./Components/Greet";
import Avatar from "./Components/Avatar";
import Name from "./Components/Name";
import Button from "./Components/Button";


function App (){
  return (
  <div style={{border:"2px white solid" }}>

    {/* <h1>APP</h1>
    <Greet/> */}

    <Name/>
    <Avatar/>
    <Button/>
    <Name/>
    <Avatar/>
    <Button/>
  </div>
  )
}

export default App;
