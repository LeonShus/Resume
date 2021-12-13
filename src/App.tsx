import React from "react";
import styles from "./App.module.css"
import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";
import {Main} from "./Components/Main/Main";

export const App = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}
