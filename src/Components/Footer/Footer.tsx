import React from "react"
import styles from "./Footer.module.css"
import defImg from "../../default/img/React_IMG.jpeg"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <img src={defImg} alt="link"/>
                <img src={defImg} alt="link"/>
                <img src={defImg} alt="link"/>
                <img src={defImg} alt="link"/>
            </div>
        </div>
    )
}