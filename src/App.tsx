import React from "react";
import styles from "./App.module.css"
import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Main} from "./Components/Main/Main";
import {MyProj} from "./Components/MyProj/MyProj";
import {Feedback} from "./Components/Feedback/Feedback";

export const App = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Main/>
            <Skills/>
            <MyProj/>
            <Feedback/>
        </div>
    );
}
