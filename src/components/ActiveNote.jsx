import React, { useEffect, useState } from "react";
import styles from "./ActiveNote.module.css";
import NoteIcon from "./NoteIcon";
import { v4 as uuid } from 'uuid';
import dayjs from "dayjs";
import { IoMdSend } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const ActiveNote = ({name,color}) => {
  const [currNote, setCurrNote] = useState("");
  const [notes, setNotes] = useState([]);
  // console.log(notes);

  const handleNoteSumbit = () => {
    if(currNote.trim()){
      const note = {
        id: uuid(),
        note: currNote,
        date: new dayjs().format('DD MMM YYYY'),
        time: new dayjs().format('hh:mm A')
      }
      const data = JSON.parse(localStorage.getItem('notes')) || [];
      const newNotes = [...notes, note];
      setNotes(newNotes);

      const newNoteData = data.map(note => {
        if(note.name === name){
          note.content = newNotes;
        }
        return note;
      })
      localStorage.setItem('notes', JSON.stringify(newNoteData));
      setCurrNote('');
    }
  }
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleNoteSumbit();
      // console.log('Enter key pressed');
    }
  };


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes')) || [];
    const filteredNotes = data.filter(note => note.name === name);
    if (filteredNotes.length > 0) {
      setNotes(filteredNotes[0].content);
    }
  }, [name]);

  return (
    <div className={styles.mainContainer}>
        <div className={styles.header}>
            <NoteIcon name={name} color={color} />
            <h1>{name}</h1>
        </div>


        <div className={styles.notesContainer}>
          {
            notes.map((note) => (
              <div key={note.id} className={styles.note}>

                  <p>{note.note}</p>
                  <div className={styles.time}>
                    <p>{note.date} <GoDotFill /> {note.time}</p>
                  </div>
              </div>
            ))
          }
        </div>


        <div className={styles.textContainer}>
            <div className={styles.textarea}>
                <textarea 
                  placeholder="Enter your note here..."
                  onKeyDown={handleKeyPress}
                  value={currNote}
                  onChange={(e) => setCurrNote(e.target.value)}
                /> 
                <button 
                  type="submit"
                  disabled={!currNote.trim()}
                  onClick={() => handleNoteSumbit()}
                ><IoMdSend color={!currNote.trim() ? '#B0B0B0' : '#001F8B'} size={30}/>
</button>
            </div>
        </div>
    </div>
  )
};

export default ActiveNote;
