import Avt from "./Components/Avt";
import Greet from "./Components/Greet";
import "./App.css";

function App() {
  return (
    <>
      <h1>App</h1>
      <Greet/>
      <Avt
        name={"shreshth"}
        id={2501010080}
        data={["Game", "Etah", "Male"]}
        address={{ "a": "etah" }}
        link={"https://webaim.org/techniques/images/media/hand_muscles.jpg"}
        status={true}
      />
    </>
  )
}

export default App