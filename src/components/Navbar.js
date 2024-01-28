import { useState } from "react"
import "../styles/navbar.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
    
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Little Prince
      </a>
      <button 
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}        
      >
      </button>
    <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }
    >
      <ul>
        <li>
          <a class="item" href="/">HOME</a>
        </li>
        <li>
          <a class="item" href="/about">ABOUT</a>
        </li>
        <li>
          <a class="item" href="/contact">CONTACT</a>
        </li>
      </ul>
    </div>
    <div class="underline"></div>
  </nav>
  );
}