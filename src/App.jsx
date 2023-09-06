import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "./CSS Files/App.css";
import NoteCalendar from "./Calendar";

function App() {
    return (
       <div className="app-container">
         <Navbar/>
         <Header/>
         <NoteCalendar/>
       </div>
            
       
    );
}

export default App;
