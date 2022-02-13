import React from "react"
import styles from "./Feedback.module.scss"
import {useFormik} from "formik";
import * as Yup from "yup"
import {Title} from "../../common/c2-components/c1-title/title";
import {Input} from "../../common/c2-components/c3-input/custom-inpt";
import {Textarea} from "../../common/c2-components/c4-textarea/custom-textarea";
import {Button} from "../../common/c2-components/c2-button/custom-button";
//@ts-ignore
import Fade from "react-reveal/Fade"

export const Feedback = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less"),
            message: Yup.string()
                .max(20, "Must be 20 characters or less"),
        }),
        onSubmit: values => {
            console.log(values);
        },
    })

    return (
        <div id={"feedback"} className={styles.container}>
            <Fade bottom>
                <Title title={"Feedback"}/>
                <div className={styles.feedbackContainer}>
                    <div className={styles.formContainer}>
                        <h4>Say Hello <span>;)</span></h4>
                        <form className={styles.form} onSubmit={formik.handleSubmit}>
                            <Input
                                name={"name"}
                                value={formik.values.name}
                                placeholder={"Name"}
                                onChange={formik.handleChange}
                            />
                            <Input
                                name={"email"}
                                value={formik.values.email}
                                placeholder={"Email"}
                                onChange={formik.handleChange}
                            />
                            <Textarea
                                name={"message"}
                                value={formik.values.message}
                                placeholder={"Message"}
                                onChange={formik.handleChange}
                            />
                            <Button
                                type={"submit"}
                                title={"Send"}
                                buttonType={"button"}
                            />
                        </form>
                    </div>
                </div>
            </Fade>
        </div>
    )
}