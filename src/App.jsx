import { useEffect, useState } from "react";
import "./App.css";
import NoteButton from "./components/NoteButton";
import NoNote from "./components/NoNote";
import ActiveNote from "./components/ActiveNote";
import Modal from "./components/Modal";
import { FaPlus } from "react-icons/fa6";

function App() {
  const [notes, setNotes] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // console.log(activeNote)
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('notes')))
  },[showModal])

  return (
    <div className="main">
      {/* SIDEBAR */}
      <div className="sidebar-container">
        <div className="sidebar-content">
          <h1 className="heading">Pocket Notes</h1>

          {notes && notes.map((note) => (
            <NoteButton
              key={note.id}
              color={note.color}
              name={note.name}
              onClick={() => {
                setActiveNote(note)
                if(window.innerWidth<425){

                  document.querySelector('.sidebar-container').style.display = 'none';
                  document.querySelector('.main-content').style.display = 'block';
                }
              }
              }
            />
          ))}
        </div>
        <button className="add" onClick={() => setShowModal(true)}>
          <FaPlus size={22} />
        </button>
      </div>

      {/* MAIN CONTENT */}

      <div className="main-content">
        {activeNote ? (
          <ActiveNote name={activeNote.name} color={activeNote.color} />
        ) : (
          <NoNote />
        )}
      </div>
      {showModal ? <Modal isOpen={showModal} onClose={(()=> setShowModal(false))} /> : null}
    </div>
  );
}

export default App;
