import "./App.css";
import ButtonComponent from "./Components/Button";
import ImageComponent from "./Components/Img";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponents imageSrc="https://placedog.net/300" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent buttonText="Clicca qui!" />
      </header>
    </div>
  );
}

export default App;
