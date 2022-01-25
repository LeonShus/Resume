import React from "react"
import styles from "./custom-button.module.scss"

type ButtonType = "link" | 'button'

type LinkBtnPropsType = {
    type: ButtonType
    title: string
    url?: string
}

export const Button = ({ type, title, url }: LinkBtnPropsType) => {

    if(type === 'link'){
        return (
            <div className={styles.btnContainer}>
                <a className={styles.element} href={`${url}`}>
                    {title}
                </a>
            </div>
        )
    }
    return (
        <div className={styles.btnContainer}>
            <button className={styles.element}>
                {title}
            </button>
        </div>
    )
}