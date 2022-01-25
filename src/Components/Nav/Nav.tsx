import React from "react"
import styles from "./Nav.module.scss";


export const Nav = () => {
    return (
        <div className={styles.container}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Работы</a>
            <a href="">Контакты</a>
        </div>
    )
}