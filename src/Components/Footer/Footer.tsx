import React from "react"
import styles from "./Footer.module.css"
import defImg from "../../common/c3-img/React_IMG.jpeg"

export const Footer = () => {
    return (
        <div className={styles.container}>
            <h2>Leonid Shustov</h2>
            <div className={styles.contentContainer}>
                <img src={defImg} alt="link"/>
                <img src={defImg} alt="link"/>
                <img src={defImg} alt="link"/>
                <img src={defImg} alt="link"/>
            </div>
            <span>Lorem ipsum.</span>
        </div>
    )
}