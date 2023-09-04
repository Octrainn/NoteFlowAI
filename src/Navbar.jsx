import React from "react";
import "./CSS Files/Navbar.css"
import Header from "./Header";


function Navbar (){

    const list = [        
        "New Page", 
        "Journal",
        "Theme",
        "Diary",
        "Template"

    ]

   

    return (
        <>
    
          <nav className="nav-container">
            <ul>
            {list.map(item => (
                    <li className="elements" key={item}>{item}</li>
                ))}
            </ul>
          </nav>
        </> 
    )
}

export default Navbar;