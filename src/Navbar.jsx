import React from "react";
import "./CSS Files/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBook, faFile, faPaintBrush, faCopy} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const list = [        
        "New Page",
        "Journal",
        "Theme",
       
        "Template"
    ];

    return (
        <>
            <nav className="nav-container">
                <ul>
                    {list.map(item => (
                        <li className="elements" key={item}>
                            <span className="icon-text">
                                {item === "New Page" && <FontAwesomeIcon icon={faFile} className="plus-icons" />}
                                {item === "Journal" && <FontAwesomeIcon icon={faBook} className="plus-icons" />}
                                {item === "Theme" && <FontAwesomeIcon icon={faPaintBrush} className="plus-icons" />}
                                {item === "Template" && <FontAwesomeIcon icon={faCopy} className="plus-icons" />}
                               
                               
                               
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
