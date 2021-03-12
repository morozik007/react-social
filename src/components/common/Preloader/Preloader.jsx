import React from 'react'
import s from "./Preloader.module.css";
import loader from "../../../assets/images/loader.svg";

const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Preloader;

