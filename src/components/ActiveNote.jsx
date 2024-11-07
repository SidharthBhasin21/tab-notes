import React from "react";
import styles from "./ActiveNote.module.css";
import NoteIcon from "./NoteIcon";

const ActiveNote = ({name,color}) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.header}>
            <NoteIcon name={name} color={color} />
            <h1>{name}</h1>
        </div>

        <div className={styles.textContainer}>
            <div className={styles.textarea}>
                <textarea> asd asd</textarea>
                <button >send</button>
            </div>
        </div>
    </div>
  )
};

export default ActiveNote;
