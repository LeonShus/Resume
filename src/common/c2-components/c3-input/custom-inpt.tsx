import React, {DetailedHTMLProps, InputHTMLAttributes} from "react"
import styles from "./custom-inpt.module.scss"

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


type CustomInputPropsType = DefaultInputPropsType & {
    errorMessage?: string
}


export const Input = ({errorMessage, ...params}: CustomInputPropsType) => {
    return (
        <div className={styles.container}>
            <input
                {...params}
            />
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </div>
    )
}