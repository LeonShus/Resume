import React from "react"
import styles from "./custom-inpt.module.scss"

export type InputPropsType = {
    name?: string
    value: string
    placeholder: string
    onChange?: any
}

export const Input = ({name, value, placeholder, onChange}: InputPropsType) => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>

    )
}