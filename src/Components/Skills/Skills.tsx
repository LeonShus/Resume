import React from "react"
import styles from "./Skills.module.scss"
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/c2-components/c1-title/title";

export const Skills = () => {
    return (
        <div className={styles.container}>

            <Title title={"My Skills"}/>

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