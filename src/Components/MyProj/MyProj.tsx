import React from "react"
import styles from "./MyProj.module.css"
import {Proj} from "./Proj/Proj";


export const MyProj = () => {
    return (
        <div className={styles.container}>
            <h1>My projects</h1>
            <div className={styles.projContainer}>
                <Proj/>
                <Proj/>
            </div>
        </div>
    )
}