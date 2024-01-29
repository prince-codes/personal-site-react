import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* 4. add link tags for added pages for navigating */}
          {/* <li>
            <Link to="/404">NotFound</Link>
          </li> */}
        </ul>
      </nav>
      {/* 3. define routes for each page  */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='404' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App;
// import logo from './logo.svg';
// import './App.css';
// import './index'
// import "./index.css";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo"/>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a 
//           className="App-link"
//           href="https://react.dev"
//           target="_blank"
//           rel="noopener referrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Navbar />
//       <section className="banner">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div class="banner-content">
//           <h2>Hello</h2>
//           <p>
//             I'm Prince, an engineer focused on developing or testing web applications. Here you will find information about me and what I do.
//           </p>
//           <br></br>
//           <p>
//             One of my favorite stories to read is <a href="https://youtu.be/APG1upS8LDw?feature=shared">The Little Prince</a>. It seems to be a book that both adults and kids may enjoy for different reasons. 
//           </p>
//           <br></br>
//         </div>
//       </section>
//     </div>
//   );
// }