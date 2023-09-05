import React from "react";
import "./CSS Files/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBook } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const list = [        
        "New Page",
        "Journal",
        "Theme",
        "Diary",
        "Template"
    ];

    return (
        <>
            <nav className="nav-container">
                <ul>
                    {list.map(item => (
                        <li className="elements" key={item}>
                            <span className="icon-text">
                                {item === "New Page" && <FontAwesomeIcon icon={faPlus} className="plus-icons" />}
                                {item === "Journal" && <FontAwesomeIcon icon={faBook} className="plus-icons" />}
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
