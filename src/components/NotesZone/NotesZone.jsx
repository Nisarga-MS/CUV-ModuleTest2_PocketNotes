import React, { useEffect, useState } from 'react'
import styles from "./NotesZone.module.css"
import GroupNames from '../GroupNames/GroupNames'
import BackArrow from "../../assets/icons/backarrow.svg"
import NoteSlip from '../NoteSlip/NoteSlip'
import TextArea from '../TextArea/TextArea'
import { useWidth } from '../../context/widthContext'
import { useParams ,Link } from 'react-router-dom'


export default function NotesZone() {
    const {groupId} =useParams();
    const screenWidth = useWidth();
    const [notes, setNotes] = useState([]);
    const [group,setGroup] = useState(null);
    const [groupError, setGroupError] =useState(false);

    useEffect(()=>{
        setGroupError(false);
        const groupExist = JSON.parse(localStorage.getItem('groups')).find((group)=> group.groupId === groupId);
        const notes =JSON.parse(localStorage.getItem(groupId))

        if(groupExist) setGroup(groupExist)
         else setGroupError(true);
        
        if(notes) setNotes(notes)
        else setNotes([]);
        
    },[groupId])

    const insertNote =(newNote)=>{
      setNotes((prev)=>[...prev, newNote]);
      localStorage.setItem(groupId, JSON.stringify([...notes, newNote]));
    }

  return (
    <div>
      {!groupError ? 
      group && 
       <div className={styles.notesZone}>
        <div className={styles.grouppNameTab}>
          {screenWidth<675 && <Link to={-1}><img src={BackArrow} alt="backarrow" /></Link>}
          <GroupNames groupName={group.groupName} bgColour={group.bgColour} fontColor='#FFFFFF' />
        </div>
        <div className={styles.notesBox}>
          {notes.map((note, index)=>(
            <NoteSlip key={index} content={note.content}  date={note.date} time={note.time} />
          ))}
        </div>
        <TextArea insertNote={insertNote} />
       </div>
       :
       <div className={`${styles.notesZone} ${styles.groupError}`}>
        <h1>Group Isn't Exist!</h1>
       </div>
    }
    </div>
  )
}
