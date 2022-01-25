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
import todolistPrev from "./common/c3-img/TodolistPrev.png"
import webSocialPrev from "./common/c3-img/WebSocialPrev.png"

export type SkillType = {
    id: string
    titleIcon: any
    iconColor: string
    about: string
}
export type ProjectType = {
    id: string
    title: string
    screen: any
    about: string
    url: string
}
export type BllType = {
    skills: SkillType[]
    projects: ProjectType[]
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

        projects: [
            {
                id: "WebSocial",
                title: "Social",
                screen: webSocialPrev,
                about: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quisquam!",
                url: "https://leonshus.github.io/SocialTS/"
            },
            {
                id: "Todos",
                title: "Todos",
                screen: todolistPrev,
                about: " Lorem ipsum ipsum ipsum dolor sit ame!",
                url: "https://leonshus.github.io/Todolist-TS/"
            },
            {
                id: "Todos",
                title: "Todos",
                screen: todolistPrev,
                about: " Lorem ipsum ipsum ipsum dolor sit ame!",
                url: "https://leonshus.github.io/Todolist-TS/"
            },
            {
                id: "Todos",
                title: "Todos",
                screen: todolistPrev,
                about: " Lorem ipsum ipsum ipsum dolor sit ame!",
                url: "https://leonshus.github.io/Todolist-TS/"
            },
        ]
    }


    return (
        <div className={styles.container}>
            {/*<Header/>*/}
            <Main/>
            <Skills skills={bll.skills}/>
            <MyProj projects={bll.projects}/>
            <Feedback/>
            <Footer/>
        </div>
    );
}
