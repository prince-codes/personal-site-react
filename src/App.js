import './App.css';
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
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