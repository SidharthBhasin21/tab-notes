import { useState } from "react";
import "./App.css";
import NoteButton from "./components/NoteButton";
import Notes from "./data/testData";
import NoNote from "./components/NoNote";
import ActiveNote from "./components/ActiveNote";
import Modal from "./components/Modal";

function App() {
  const [notes, setNotes] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  const [noteContent, setNoteContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main">
      {/* SIDEBAR */}
      <div className="sidebar-container">
        <div className="sidebar-content">

        <h1 className="heading">Pocket Notes</h1>
        
          {Notes.map((note) => (
            <NoteButton key={note.id} color={note.color} name={note.name} onClick={()=>setActiveNote(note.name)} />
          ))}
          </div>
          <button className="add" onClick={()=> setShowModal(true)} >+</button>
      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">
          {
            activeNote ?
              <ActiveNote name={activeNote} color='pink' />
            : <NoNote />
          }

      </div>
      {
        showModal? <Modal /> : null
      }
    </div>
  );
}

export default App;
