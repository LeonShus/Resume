import React from "react"
import styles from "./title.module.scss"

type TitleType = {
    title: string
}

export const Title = ({title}: TitleType) => {
    return (
        <div className={styles.container}>
            <h3>
                {title}
            </h3>
            <span></span>
        </div>
    )
}