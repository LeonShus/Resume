import React from "react"
import styles from "./custom-textarea.module.scss"

export type TextareaPropsType = {
    name?: string
    value: string
    placeholder: string
    onChange?: any
}

export const Textarea = ({name, value, placeholder, onChange}: TextareaPropsType) => {
    return (
        <div className={styles.container}>
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>

    )
}