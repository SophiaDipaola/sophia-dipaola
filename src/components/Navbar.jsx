import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div class="nav-div">
                <ul>
                  
                    <NavLink className="nav-link" exact to="/"><b>Home</b></NavLink>
                    
                    <NavLink className="nav-link" exact to="/projects"><b>Portfolio</b></NavLink>
                   
                    <NavLink className="nav-link" exact to="/about"><b>About</b></NavLink>
                    
                    <a className="nav-link" target="_blank" rel="noreferrer" href="http://www.keepandshare.com/doc11/view.php?id=31790&da=y"><b>Resume</b></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
