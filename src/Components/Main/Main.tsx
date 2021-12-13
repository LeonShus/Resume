import React from "react"
import styles from "./Main.module.css"
import defAvatar from "../../default/img/Avatar.png"

export const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.aboutMe}>
                    <h1>
                        Привет!
                    </h1>
                    <p>Меня зовут Леонид</p>
                    <p>Я Front-end разработчик</p>
                </div>
                <div>
                    <img src={defAvatar} alt="Author Photo"/>
                </div>

            </div>
        </div>
    )
}