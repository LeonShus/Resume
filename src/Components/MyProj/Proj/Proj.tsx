import React from "react"
import styles from "./Proj.module.scss"
import {ProjectType} from "../../../App";

type ProjPropsType = {
    project: ProjectType
}

export const Proj = ({project}: ProjPropsType) => {

    const styleForScreen = {
        backgroundImage: `url(${project.screen})`
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.projScreen}
                 style={styleForScreen}
            >
                <a href="">
                    Open
                </a>
            </div>
            <div className={styles.about}>
                <h4>
                    {project.title}
                </h4>
                <p>
                    {project.about}
                </p>
            </div>

        </div>
    )
}