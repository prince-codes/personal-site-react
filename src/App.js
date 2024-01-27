import './App.css';
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer.js";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;