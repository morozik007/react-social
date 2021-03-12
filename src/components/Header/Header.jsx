import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={s.header}>
            {
                props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>
            }
        </header>
    )
}

export default Header;