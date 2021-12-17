import React from "react"
import styles from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.container}>
            <h2>Skills</h2>

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