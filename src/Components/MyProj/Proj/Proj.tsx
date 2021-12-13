import React from "react"
import defPhoto from "../../../default/img/React_IMG.jpeg"
import styles from "./Proj.module.css"

export const Proj = () => {
    return (
        <div className={styles.container}>
            <div>
                <a href="">
                    <img src={defPhoto} alt="My project photo link"/>
                </a>
            </div>
            <div>
                <h3>
                    Name
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quisquam!
                </p>
            </div>

        </div>
    )
}