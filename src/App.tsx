import React from "react";
import classes from "./App.module.css"
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";

export const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
}
