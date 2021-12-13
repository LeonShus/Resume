import React from "react";
import styles from "./App.module.css"
import {Header} from "./Components/Header/Header";
import {Skills} from "./Components/Skills/Skills";

export const App = () => {
    return (
        <div className={styles.container}>
            <Header/>

            <Skills/>
        </div>
    );
}
