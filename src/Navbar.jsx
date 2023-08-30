import React from "react";
import "./CSS Files/Navbar.css"


function Navbar (){

    const list = [        
        "New Page", 
        "Journal",
        "Theme",
        "Diary",
        "Template (Notebook vs Blank)"

    ]

    const list2 = [
      "Text Size",
      "Text Style",
      "Text Color",
      "Add Bullet Points",
      "Line Spacing",
      
    ]

    return (
        <>
        <nav className="top-nav">
          <ul>
          {list2.map(item => (
                    <li className="top-row-elements" key={item}>{item}</li>
                ))}
          </ul>


        </nav>
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