import React from "react"
import styles from "./link-button.module.scss"

type LinkBtnPropsType = {
    title: string
    url: string
}

export const LinkBtn = ({ title, url }: LinkBtnPropsType) => {
    return (
        <div className={styles.btnContainer}>
            <a href={`${url}`}>
                {title}
            </a>
        </div>
    )
}