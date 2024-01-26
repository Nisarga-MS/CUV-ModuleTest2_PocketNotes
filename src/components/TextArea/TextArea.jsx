import React, { useState } from 'react'
import styles from "./TextArea.module.css";
import SendBtn from '../SendBtn';

export default function TextArea({
    insertNote
}) {
    const [note, setNote] =useState("");
    const  handleNoteSubmit =()=>{
        const timestamp = new Date();
        const newNote ={
            content:note,
            date: timestamp.toLocaleDateString('en-US',{day:"numeric"}) + " " + timestamp.toLocaleDateString('en-US',{month:"short", year:"numeric"}),
            time:new Date().toLocaleString('en-US',{hour:"numeric",minute:"2-digit"})
        }

        insertNote(newNote);
        setNote(" ");
    }
  return (
    <div className={styles.textArea}>
        <div className={styles.inputBox}>
            <textarea name="note" id="note" placeholder='Enter your text here...........' value={note} onChange={(event)=> setNote(event.target.value)} />
            <div className={styles.sendButton} style={{pointerEvents:note.length>0? "auto": "none"}} onClick={handleNoteSubmit}>
                <SendBtn disabled={!(note.length >0)} />
            </div>
        </div>
    </div>
  )
}
