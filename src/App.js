import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      */}
      <Navbar />
      <div className="container">
        <article>
          <h1>React app coming soon</h1>
          Stellar forming...
          <p>Astral World Almost Ready</p>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src={logo} className="App-logo" alt="logo" />
        </article>
      </div>
    </div>
  );
}

export default App;
