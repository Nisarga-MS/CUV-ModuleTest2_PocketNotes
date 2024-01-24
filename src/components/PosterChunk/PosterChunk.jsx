import React from 'react'
import styles from "./PosterChunk.module.css"
import Poster from "../../assets/images/poster.png"
import Lock from "../../assets/icons/lock.svg";

export default function PosterChunk() {
  return (
    <div className={styles.poster}>
        <div className={styles.focusParts}>
            <img src={Poster} alt="poster" />
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
        <div className={styles.endLine}>
            <span><img src={Lock} alt="lock"/> end-to-end encrypted</span>
        </div>
    </div>
  )
}
