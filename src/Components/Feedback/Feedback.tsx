import React from "react"
import styles from "./Feedback.module.scss"
import {useFormik} from "formik";
import * as Yup from "yup"
import { Title } from "../../common/c2-components/c1-title/title";
import {Input} from "../../common/c2-components/c3-input/custom-inpt";

export const Feedback = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            info: "",
            text: ""
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
            <Title title={'Feedback'}/>
            <div className={styles.feedbackContainer}>
                <div className={styles.formContainer}>
                    <h4>Say Hello <span>;)</span></h4>
                    <form className={styles.form} action="">
                        <Input/>
                        <Input/>
                    </form>
                </div>
            </div>
        </div>
    )
}






// <input
//     className={styles.nameInp}
//     name={"info"}
//     type="text"
//     onChange={formik.handleChange}
//     value={formik.values.info}
// />