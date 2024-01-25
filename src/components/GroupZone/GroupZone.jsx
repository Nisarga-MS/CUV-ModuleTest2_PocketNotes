import React from "react";
import styles from "./GroupZone.module.css";
import GroupNames from "../GroupNames/GroupNames";
import { useParams } from "react-router-dom";
import { useWidth } from "../../context/widthContext";
import { Link } from "react-router-dom";


const selected = {
  backgroungdColor: "#2f2f2f2b",
  borderRadius: "1rem",
};

export default function GroupZone({ groups, TriggerCreateGroup }) {
    const {groupId} =useParams();
    const screenWidth = useWidth();

  return (
  <div className={`${styles.groupZone} ${groupId && screenWidth<675 ? "remove" : ""}`}>
    <div className={styles.title}>
        <span>Pocket Notes</span>
    </div>
    <div className={styles.groupsBox}>
        {groups?.map((group)=>(
            <div key={group.groupId} style={group.groupId===groupId? selected :{}}>
                <Link to={`/notes/${group.groupId}`} replace={screenWidth<675 ? false : true}>
                    <GroupNames groupName={group.groupName} bgColour={group.bgColour} />
                </Link>
            </div>
        ))}
    </div>
    <button className={styles.addButton} title="Add Group" onClick={TriggerCreateGroup}>+</button>

  </div>);
}
