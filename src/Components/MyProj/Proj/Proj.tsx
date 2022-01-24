import React from "react"
import defPhoto from "../../../default/img/React_IMG.jpeg"
import styles from "./Proj.module.scss"

export const Proj = () => {
    return (
        <div className={styles.container}>
            <div className={styles.projScreen}>
                <a href="">
                    Open
                </a>
            </div>
            <div className={styles.about}>
                <h4>
                    Name
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quisquam!
                </p>
            </div>

        </div>
    )
}