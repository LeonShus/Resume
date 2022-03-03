import React from "react";
import styles from "./App.module.scss"
import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Main} from "./Components/Main/Main";
import {MyProj} from "./Components/MyProj/MyProj";
import {Feedback} from "./Components/Feedback/Feedback";
import {Footer} from "./Components/Footer/Footer";
import {faCss3Alt, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons"
import {faDotCircle} from "@fortawesome/free-regular-svg-icons"
import todolistPrev from "./common/c3-img/to-do.jpeg"
import webSocialPrev from "./common/c3-img/social-net.jpg"
import cardsPrev from "./common/c3-img/cardsImg.jpg"

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
                about: "I use JavaScript with TypeScript."
            },
            {
                id: "React",
                titleIcon: faReact,
                iconColor: "#61DAFB",
                about: "I prefer to use React in conjunction with Redux (Toolkit). Redux-Thunk"
            },
            {
                id: "Layout",
                titleIcon: faCss3Alt,
                iconColor: "#F16529",
                about: "Layout: HTML5, CSS3, Scss, Mui"
            },
            {
                id: "Other",
                titleIcon: faDotCircle,
                iconColor: "",
                about: "Also: Axios, REST API, Unit Tests (Jest), Storybook, Git"
            },
        ],

        projects: [
            {
                id: "Playing Cards",
                title: "Playing Cards",
                screen: cardsPrev,
                about: "TypeScript, React, Redux, Redux-thunk, Router-dom,  Axios,  Mui for some components, SCSS, Formik; \n" +
                    "Team developement; Bug fixing, deployin.",
                url: "https://leonshus.github.io/Cards/"
            },
            {
                id: "WebSocial",
                title: "Social Net",
                screen: webSocialPrev,
                about: "TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui for some component, SCSS, Formik; Bug fixing, deployin.",
                url: "https://leonshus.github.io/Social-net/#/profile/19076"
            },
            {
                id: "Todo",
                title: "To Do List",
                screen: todolistPrev,
                about: "TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik, Storybook; Bug fixing, deployin; Covering code with unit tests.",
                url: "https://leonshus.github.io/Todolist-TS/"
            },
        ]
    }

    return (
        <div>
            <Header/>
            <div className={styles.container}>

                <Main/>
                <Skills skills={bll.skills}/>
                <MyProj projects={bll.projects}/>
                <Feedback/>
                <Footer/>
            </div>
        </div>

    );
}
