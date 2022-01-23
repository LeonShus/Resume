import React from "react"
import styles from "./Main.module.scss"
import myPhoto from "../../common/c3-img/myPhoto01.png"

export const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>

                <img src={myPhoto} alt="Author Photo"/>

                <h1>
                    Hi, I'm Leonid Shustov!
                </h1>

                <div className={styles.aboutMe}>
                    <p>Junior</p>
                    <p>Front-end developer</p>
                </div>


            </div>
        </div>
    )
}