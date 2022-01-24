import React from "react"
import styles from "./MyProj.module.scss"
import {Proj} from "./Proj/Proj";
import {Title} from "../../common/c2-components/c1-title/title";


export const MyProj = () => {
    return (
        <div className={styles.container}>
            <Title title={'My Projects'}/>
            <div className={styles.projContainer}>
                <Proj/>
                <Proj/>
            </div>
        </div>
    )
}