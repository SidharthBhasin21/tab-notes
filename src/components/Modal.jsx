import React, { useEffect, useRef, useState } from 'react'
import styles from './Modal.module.css'
import { v4 as uuid } from 'uuid';

const Modal = ({isOpen, onClose}) => {
    const [groupName, setGroupName] = useState('')
    const [selectedColor, setSelectedColor] = useState(null)
    const modalRef = useRef();

    const colors = [ "#B38BFA", "#FF79F2","#43E6FC", "#F19576", "#0047FF", "#6691FF"]
    
    // console.log(isOpen)
    
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        // console.log(groupName)
        let note = {}
    const createNote = () => {
        if (groupName && selectedColor) {
            // console.log(groupName, selectedColor)
            onClose();
            note = {
                id: uuid(),
                color: selectedColor,
                name: groupName,
                content: []
            }
            let notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(note);
            localStorage.setItem('notes', JSON.stringify(notes));
        }
    }
    
        useEffect(()=>{
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        },[isOpen, onClose])

    if (!isOpen) return null;
    return (
        <div className={styles.modalContainer}>
            <div 
                className={styles.modal} 
                ref={modalRef}
            >
                <h3>Create New group</h3>
                <div className={styles.inputContainer}>
                    <label htmlFor="group-input">Group Name</label>
                    <input 
                        type="text" 
                        id="group-input" 
                        placeholder='Enter group name' 
                        value={groupName}
                        onChange={(e)=>setGroupName(e.target.value)}
                        />
                </div>
                <div className={styles.colorContainer}>
                    <p>Choose color</p>
                    <div className={styles.colorPicker}>
                        {
                            colors.map((color, index)=>(
                                <div 
                                    key={index} 
                                    className={styles.color} 
                                    style={{
                                        backgroundColor: color,
                                        border: selectedColor === color ? '2px solid #001F8B' : 'none',
                                    }} 
                                    onClick={()=>setSelectedColor(color)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.createButton}
                        onClick={()=> createNote()}    
                    >Create</button>
                </div>
            </div>
        </div>
    )
}

export default Modal