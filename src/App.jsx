import { useState } from "react";
import "./App.css";
import NoteButton from "./components/NoteButton";
import Notes from "./data/testData";

function App() {
  const [notes, setNotes] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  const [noteContent, setNoteContent] = useState(null);
  return (
    <div className="main">
      {/* SIDEBAR */}
      <div className="sidebar-container">
        <div className="sidebar-content">

        <h1 className="heading">Pocket Notes</h1>
        
          {Notes.map((note) => (
            <NoteButton key={note.id} color={note.color} name={note.name} />
          ))}
          </div>
          <button className="add">+</button>
      </div>

      {/* MAIN CONTENT */}

      <div className="main-content"></div>
    </div>
  );
}

export default App;
