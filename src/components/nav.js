import React from 'react';

function Nav({setPage}) {
  return (
    <nav>
        <ul>
            <li>
                <a href="#about" onClick={()=>{setPage("about")}}>about</a>
                <a href="#projects" onClick={()=>{setPage("portfolio")}}>projects</a>
                <a href="#contact" onClick={()=>{setPage("contact")}}>contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav