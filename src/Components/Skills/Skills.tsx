import React from "react"
import styles from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.container}>
            <h1>Skills</h1>

            <div className={styles.skillsContainer}>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </div>

    )
}