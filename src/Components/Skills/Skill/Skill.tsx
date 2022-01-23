import React from "react"
import defImgForSkill from "../../../common/c3-img/React_IMG.jpeg"
import styles from "./Skill.module.css"

export const Skill = () => {
    return (
        <div className={styles.skillContainer}>
            <img src={defImgForSkill} alt="skill"/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Commodi corporis ipsam quia quisquam quo recusandae!
            </p>
        </div>
    )
}