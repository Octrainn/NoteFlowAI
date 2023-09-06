import React from "react";
import "./CSS Files/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBook, faFile, faPaintBrush, faCopy, faNoteSticky} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const list = [        
        "Main Notes",
        "New Page",
        "Journal",
        "Theme",
        "Template"
    ];

    const list2 = [
        "Subjects",
        "Math",
        "Science",
        "English",
        "History",
    ]

    

    return (
        <>
            <nav className="nav-container">
                <ul>
                    {list.map(item => (
                        <li className="elements" key={item}>
                            <span className="icon-text">
                                {item === "Main Notes" && <FontAwesomeIcon icon={faNoteSticky} className="plus-icons" />}
                                {item === "New Page" && <FontAwesomeIcon icon={faFile} className="plus-icons" />}
                                {item === "Journal" && <FontAwesomeIcon icon={faBook} className="plus-icons" />}
                                {item === "Theme" && <FontAwesomeIcon icon={faPaintBrush} className="plus-icons" />}
                                {item === "Template" && <FontAwesomeIcon icon={faCopy} className="plus-icons" />}
                                {item}
                            </span>
                        </li>
                    ))}
                   {list2.map(element => (
                        <li className="more-elements" key={element}>
                          {element}
                        </li>
                   ))}
                </ul>
                <div className="profile-icon"> 
                    <h1> Insert Profile Here</h1>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
