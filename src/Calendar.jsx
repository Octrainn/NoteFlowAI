import React, { useState } from "react";
import Calendar from "react-calendar";

function NoteCalendar() {
    
    const [date, setDate] = useState(new Date())
    const handleDateChange = (newDate) => {
        setDate(newDate)
    }

    return (
        <div>
            <h1>NoteCalendar</h1>
            <Calendar onChange={handleDateChange} value={date}/>
            <p>Selected Date: {date.toDateString()}</p>
        </div>
    )

};

export default NoteCalendar