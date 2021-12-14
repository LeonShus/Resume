import React from "react"
import styles from "./Feedback.module.css"
import {useFormik} from "formik";
import * as Yup from "yup"

export const Feedback = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            text: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less"),
            text: Yup.string()
                .max(20, "Must be 20 characters or less"),
        }),
        onSubmit: values => {
            console.log(values);
        },
    })

    return (
        <div className={styles.container}>
            Feed
            <div className={styles.formContainer}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.form}>
                        <input
                            className={styles.nameInp}
                            name={"name"}
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <textarea className={styles.textInp}
                                  name={"text"}
                                  cols={30}
                                  rows={10}
                                  onChange={formik.handleChange}
                                  value={formik.values.text}
                        />
                        <button type={"submit"}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}