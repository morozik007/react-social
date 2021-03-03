import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    let navElements = props.state.navLinks.map((link) => (
        <div className={s.item} key={link.id}>
            <NavLink to={"/" + link.to} activeClassName={s.active}>
                {link.name}
            </NavLink>
        </div>
    ));

    let friends = props.state.friends.map((friend) => (
        <div className={s.item} key={friend.id}>
            <NavLink to={"/friends/" + friend.id} activeClassName={s.active}>
                <span className={s.avatar}>
                    <img
                        src="https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/t/176506_1439783277.jpg"
                        alt=""
                    />
                </span>
                {friend.name}
            </NavLink>
        </div>
    ));

    return (
        <nav className={s.nav}>
            {navElements}

            <br />
            <hr />

            <h3>Friends</h3>
            {friends}
        </nav>
    );
};

export default Navbar;