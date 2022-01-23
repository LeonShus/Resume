import React from "react";
import styles from "./App.module.scss"
// import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Main} from "./Components/Main/Main";
import {MyProj} from "./Components/MyProj/MyProj";
import {Feedback} from "./Components/Feedback/Feedback";
import {Footer} from "./Components/Footer/Footer";

export const App = () => {
    return (
        <div className={styles.container}>
            {/*<Header/>*/}
            <Main/>
            <Skills/>
            <MyProj/>
            <Feedback/>
            <Footer/>
        </div>
    );
}
