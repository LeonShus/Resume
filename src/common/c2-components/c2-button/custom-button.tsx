import React from "react"
import styles from "./custom-button.module.scss"

type ButtonType = "link" | "button"

type LinkBtnPropsType = {
    type?: "button" | "submit" | "reset" | undefined
    buttonType: ButtonType
    title: string
    url?: string
}

export const Button = ({type, buttonType, title, url}: LinkBtnPropsType) => {

    if (buttonType === "link") {
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
            <button type={type ? type : "button"} className={styles.element}>
                {title}
            </button>
        </div>
    )
}