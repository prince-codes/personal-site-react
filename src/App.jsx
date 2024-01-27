import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useNavigate,
} from "react-router-dom";
import './App.css';
import "./index.css";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <article>
          <h1>Hi, I'm Prince</h1>
          <p>
            A software engineer focused on developing or testing web applications. Here you will find information about me, what I do, and my current skills concerning technology. Further updates may follow to highlight some personal or client projects. 
          </p>
          <p>
            
          </p>
        </article>
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Outlet,
//     useNavigate,
// } from "react-router-dom";
// import "./styles/sidebar.css";

// const links = [
//     "about",
//     "projects",
//     "contact",
// ];

// const Layout = () => {
//     const navigate = useNavigate();

//     const [isMenuOpen, setIsMenuOpen] = 
//         useState(false);

//     const toggleMenu = 
//         () => setIsMenuOpen(!isMenuOpen);
        
//     const isOpen = isMenuOpen ? "open" : "";

//     const onClick = (href) => {
//         toggleMenu();
//         navigate(href);
//     };

//     return (
//         <>
//             <button 
//             className={`burger $(isOpen)`}
//             onClick={toggleMenu}>
//             </button>
//             <div
//             className={`background ${isOpen}`}>
//             </div>
//             <div className={`menu ${isOpen}`}>
//                 <nav>
//                     {links.map((link, index) => (
//                         <a key={link}
//                         className={isMenuOpen ? "appear" : ""}
//                         style={{
//                             animationDelay: `0.${index + 1}s`
//                         }}
//                         onClick={() => onClick(link)}
//                         >
//                         </a>
//                     ))}
//                 </nav>
//             </div>
//             <main className={`page ${isOpen}`}>
//                 <Outlet />
//             </main>
//         </>
//     );
// };

// const Page = ({ title, content }) => {
//     return (
//         <>
//             <h2>{title}</h2>
//             <p>{content}</p>
//         </>
//     );
// };

// // add pages in each sidebar here
// const About = () => (
//     <Page 
//         title="About"
//         content={`About Lorem ipsum...`}
//     />
// );

// // more pages here using format for About

// export const Sidebar = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={<Layout />}>
//                         <Route
//                             path="about"
//                             element={<About />}>
//                         </Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// };