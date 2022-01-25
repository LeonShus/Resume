import React from "react"
import styles from "./Header.module.scss"
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className={styles.container}>
            <Nav/>
        </div>
    )
}