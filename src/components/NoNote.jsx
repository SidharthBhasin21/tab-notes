import React from "react";
import img from "/assets/bgImageHome.png";
import styles from "./NoNote.module.css";

const NoNote = () => {
    return (
        <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
            <img src={img} alt="bgImageHome" />
            <h2>Pocket Note</h2>
            <p>
                Send and receive messages without keeping your phone online. Use
                Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
        </div>
        </div>
    );
};

export default NoNote;
