import React, {  useState } from 'react'
import styles from "./CreateGroup.module.css"

const coloursSet=["#B38BFA","#FF79F2","#43E6FC","#F19576","#0047FF","#6691FF"]

export default function CreateGroup({groups,insertGroup}) {
    const [groupName, setGroupName]=useState("");
    const [groupColour,setGroupColour]=useState("");
    const [nameError,setNameError]=useState("");
    const [colourError,setColourError]=useState(false);

    

    const handleGroupNameChange=(()=>{

    })

    const handleSubmit=(()=>{

    })
  return (
    <div className={styles.createGroup} onClick={(event)=>event.stopPropagation()} >
        <h2>Create New group</h2>
        <div className={styles.input}>
            <label htmlFor='group-name'>Group Name</label>
           <input type="text" placeholder='Enter group name' name='groupName' id="group-name" value={groupName} onChange={handleGroupNameChange} maxLength={30}/>
            {nameError && <p className={styles.error}>{nameError}</p>}
        </div>
        <div className={styles.input}>
            <label htmlFor='group-colour'>Choose colour</label>
            <div className={styles.coloursSet} id="group-colour">
                {coloursSet.map((colour)=>(
                    <div key={colour} style={{backgroundColor:colour}} className={colour === groupColour? styles.selected:""} onClick={()=>setGroupColour(colour)}></div>
                ))}
            </div>
            {(colourError && !groupColour) && <p className={styles.error}>Colour Field is Required!</p>}
        </div>
        <button className={styles.createButton} onClick={handleSubmit}>Create</button>

    </div>
  )
}
