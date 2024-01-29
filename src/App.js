import './App.css';
import "./index.css";
import Navbar from "./components/Navbar";
import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="banner">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div class="banner-content">
          <h2>Hello</h2>
          <p>
            I'm Prince, an engineer focused on developing or testing web applications. Here you will find information about me and what I do.
          </p>
          <br></br>
          <p>
            One of my favorite stories to read is <a href="https://youtu.be/APG1upS8LDw?feature=shared">The Little Prince</a>. It seems to be a book that both adults and kids may enjoy for different reasons. 
          </p>
          <br></br>
        </div> */}
      </section>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;