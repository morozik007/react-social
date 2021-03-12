import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // всегда надо округлять в большую сторону, чтоб показать остаток

    // получаем колличество страниц
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <p className={s.pages}>
                {pages.map( (p, index) => {
                    return <span
                        key={index}
                        className={props.currentPage === p && s.current}
                        onClick={(e) => {props.onChangePage(p)}}
                    >
                           {p}
                       </span>
                })}
            </p>
            {
                props.users.map( (u, index) => <div key={u.id} className={u.id} key={index}>
                    <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="" width="50"/></div>
                    <div>
                        <button
                            onClick={u.followed ? () => {props.unfollow(u.id)} : () => {props.follow(u.id)}}>
                            {u.followed ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                    <div>{u.name}</div>
                    <div>Status: {u.status ? u.status : 'no status'}</div>
                    <div>{"u.location.city, u.location.country"}</div>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export default Users;