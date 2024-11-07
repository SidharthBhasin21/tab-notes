import React, { useState } from 'react'
import styles from './Modal.module.css'


const Modal = () => {
    const [selectedColor, setSelectedColor] = useState(null)

    const colors = [ "#B38BFA", "#FF79F2","#43E6FC", "#F19576", "#0047FF", "#6691FF"]

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h3>Create New group</h3>
                <div className={styles.inputContainer}>
                    <label htmlFor="group-input">Group Name</label>
                    <input type="text" id="group-input" placeholder='Enter group name' />
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
                    <button className={styles.createButton}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Modal