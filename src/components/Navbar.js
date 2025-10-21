import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" onClick={(e)=>handleNav(e,"home")} className="brand">
          Mahmoud Hassan
        </a>
        <img src="/images/profile.jpg" alt="Logo" className="logo" />

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about" onClick={(e)=>handleNav(e,"about")}>About</a>
          <a href="#skills" onClick={(e)=>handleNav(e,"skills")}>Skills</a>
          <a href="#projects" onClick={(e)=>handleNav(e,"projects")}>Projects</a>
          <a href="#contact" onClick={(e)=>handleNav(e,"contact")}>Contact</a>
        </nav>
        <button className="nav-toggle" onClick={()=>setOpen(!open)} aria-label="toggle menu">
          <span className="burger" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;