import React from "react";
import "./CSS Files/Navbar.css";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Navbar () {
    const list = [        
        "New Page",
        "Journal",
        "Theme",
        "Diary",
        "Template"
    ];

    return (
        <>
        <div className="app-container">

       
            <nav className="nav-container">
                <ul>
                    {list.map(item => (
                        <li className="elements" key={item}>
                            <span className="icon-text">
                                {item}
                                {item === "New Page" && <FontAwesomeIcon icon={faPlus} className="plus-icon" />}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
            <Header />
            </div>
        </>
    );
}

export default Navbar;
