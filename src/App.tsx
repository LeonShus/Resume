import React from "react";
import styles from "./App.module.scss"
// import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Main} from "./Components/Main/Main";
import {MyProj} from "./Components/MyProj/MyProj";
import {Feedback} from "./Components/Feedback/Feedback";
import {Footer} from "./Components/Footer/Footer";
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faJsSquare} from "@fortawesome/free-brands-svg-icons"
import {faDotCircle} from "@fortawesome/free-regular-svg-icons"

export type SkillType = {
    id: string
    titleIcon: any
    iconColor: string
    about: string
}
export type BllType = {
    skills: SkillType[]
}

export const App = () => {

    const bll: BllType = {
        skills: [
            {
                id: "JavaScript",
                titleIcon: faJsSquare,
                iconColor: "#EFD81D",
                about: "Lorem ipsum dolor sit amet, consectetur adipiselit.Lorem ipsum dolor sit amet, consectetur adipiselit."
            },
            {
                id: "React",
                titleIcon: faReact,
                iconColor: "#61DAFB",
                about: "Lorem ipsum dolor sit amet, consectetur adipiselit."
            },
            {
                id: "Other",
                titleIcon: faDotCircle,
                iconColor: "",
                about: "Lorem ipsum dolor sit amet, consectetur adipiselit."
            },
        ],
    }


    return (
        <div className={styles.container}>
            {/*<Header/>*/}
            <Main/>
            <Skills skills={bll.skills}/>
            <MyProj/>
            <Feedback/>
            <Footer/>
        </div>
    );
}
