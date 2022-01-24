import React from "react"
import defImgForSkill from "../../../common/c3-img/React_IMG.jpeg"
import styles from "./Skill.module.scss"
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from "@fortawesome/free-brands-svg-icons"

export const Skill = () => {
    return (
        <div className={styles.skillContainer}>
            <FontAwesomeIcon icon={faReact} size={"6x"} color={'blue'}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Commodi corporis ipsam quia quisquam quo recusandae!
            </p>
        </div>
    )
}