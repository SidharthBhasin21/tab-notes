import React, { useEffect, useState } from 'react'
import styles from './NoteIcon.module.css'
const NoteIcon = ({name, color}) => {

    const [initials, setInitials] = useState('');
    const getInitials = (name) => {
        name = name.trim().replace(/\s+/g, ' ');
        const words = name.split(' ');
        if (words.length >= 2) {
            return words[0][0].toUpperCase() + words[1][0].toUpperCase();
        } else {
            return words[0][0].toUpperCase();
        }
    };

    // console.log(name)
    useEffect(()=>{
      setInitials(getInitials(name));
    },[name])



  return (
    <div className={styles.icon} style={{backgroundColor: color}}>{initials}</div>
  )
}

export default NoteIcon