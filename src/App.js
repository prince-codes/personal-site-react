import './App.css';
import "./index.css";
import Navbar from "./components/Navbar";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="banner">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="banner-content">
          <h2>Hello</h2>
          <p>
            I'm Prince, an engineer focused on developing or testing web applications. Here you will find information about me and what I do.
          </p>
          <br></br>
          <p>
            One of my favorite stories to read is <a href="https://youtu.be/APG1upS8LDw?feature=shared">The Little Prince</a>. It seems to be a book that both adults and kids may enjoy for different reasons. 
          </p>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>
      </section>
    </div>
  );
}

export default App;