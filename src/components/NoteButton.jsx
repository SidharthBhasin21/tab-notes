import React from 'react'
import NoteIcon from './NoteIcon'
import styles from './NoteButton.module.css'


const NoteButton = ({color, name}) => {
  return (
    <div className={styles.button}>
        <NoteIcon name={name} color={color} />
        <div className={styles.nameContainer}>
            <p className={styles.name}>{name}</p>
        </div>
    </div>
  )
}

export default NoteButton