import React, {useRef} from "react"
import styles from "./Feedback.module.scss"
import {useFormik} from "formik";
import * as Yup from "yup"
import {Title} from "../../common/c2-components/c1-title/title";
import {Input} from "../../common/c2-components/c3-input/custom-inpt";
import {Textarea} from "../../common/c2-components/c4-textarea/custom-textarea";
import {Button} from "../../common/c2-components/c2-button/custom-button";
//@ts-ignore
import Fade from "react-reveal/Fade"
import emailjs from "@emailjs/browser";

export const Feedback = () => {

    const form = useRef();

    const sendEmail = () => {

        // emailjs.sendForm("service_03g1grc", "template_t6x4ayn", form.current, "user_6gzAKwhkPpO0BQ8F4jTGR")
        //     .then((result) => {
        //         console.log(result);
        //     }, (error) => {
        //         console.log(error);
        //     });
        console.log(form.current)
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less"),
            email: Yup.string()
                .email().required(""),
            message: Yup.string()
                .max(400, "Must be 400 characters or less"),
        }),
        onSubmit: values => {
            console.log(values);
            sendEmail()
        },
    })

    return (
        <div id={"feedback"} className={styles.container}>
            <Fade bottom>
                <Title title={"Feedback"}/>
                <div className={styles.feedbackContainer}>
                    <div className={styles.formContainer}>
                        <h4>Say Hello <span>;)</span></h4>
                        {/*@ts-ignore*/}
                        <form ref={form} className={styles.form} onSubmit={formik.handleSubmit}>
                            <Input
                                name={"name"}
                                placeholder={"Name"}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div>{formik.errors.name}</div>
                            ) : null}
                            <Input
                                name={"email"}
                                placeholder={"Email"}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                            <Textarea
                                name={"message"}
                                placeholder={"Message"}
                                value={formik.values.message}
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