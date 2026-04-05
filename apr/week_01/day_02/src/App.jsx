import Avt from "./Components/Avt";
import Greet from "./Components/Greet";
import "./App.css";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const ans = arr.map((el) => <li>{el}</li>);
  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Greet />
      {/* Call our caomponent */}
      <Avt
        name="Rahul"
        id={23}
        hobby={["dancing", "Signing", "travelling"]}
        url={"https://i.imgflip.com/4/1bhk.jpg"}
        city={{ address: "Gurugram" }}
        status={true}
      />
      <Avt
        name="Mukesh"
        id={99}
        hobby={["dancing", "Travelling", "signing"]}
        url={"https://i.imgflip.com/4/1h7in3.jpg"}
        city={{ address: "Delhi" }}
        status={false}
      />

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <hr />

      <ol>{ans}</ol>
    </div>
  );
}

export default App;
