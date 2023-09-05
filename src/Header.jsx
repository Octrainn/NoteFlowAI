import React, { useState } from "react"
import "./CSS Files/Header.css"

function Header() {
    const [notes, setnotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');

    const handleNoteChange = (event) => {
        setCurrentNote(event.target.value);
    };
    const handleSaveNote = () => {
        if (currentNote.trim() !== '') {
          setnotes([...notes, currentNote]);
          setCurrentNote('');
        }
    };

    return (
    <div className="note-container">
        <div className="screen">
        <h1>NoteFlow</h1>
        <textarea 
        rows="100"
        cols="100"
        value={currentNote}
        onChange={handleNoteChange}
        placeholder="Start Writing..."
        />
        <button onClick={handleSaveNote}>Save Note</button>
        <h2>Your Notes</h2>
        <ul>
            {notes.map((note, index) => (
                <li key={index}>{note}</li>
            ))}
        </ul>
        </div>
    </div>
    );
}

export default Header;
