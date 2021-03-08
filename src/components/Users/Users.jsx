import React from 'react'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullName: 'Andrey',
                status: 'статус какойто',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                photoUrl: 'https://vokrug.tv/pic/news/a/d/a/4/ada46649ae337d1f9ddeb1a13b6803c7.jpg'
            },
            {
                id: 2,
                followed: true,
                fullName: 'Andrey 2',
                status: 'статус какойто',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                },
                photoUrl: 'https://vokrug.tv/pic/news/a/d/a/4/ada46649ae337d1f9ddeb1a13b6803c7.jpg'
            },
            {
                id: 3,
                followed: false,
                fullName: 'Andrey 3',
                status: 'статус какойто',
                location: {
                    city: 'New-york',
                    country: 'USA'
                },
                photoUrl: 'https://vokrug.tv/pic/news/a/d/a/4/ada46649ae337d1f9ddeb1a13b6803c7.jpg'
            },
            {
                id: 4,
                followed: true,
                fullName: 'Andrey 4',
                status: 'статус какойто',
                location: {
                    city: 'Berlin',
                    country: 'Germany'
                },
                photoUrl: 'https://vokrug.tv/pic/news/a/d/a/4/ada46649ae337d1f9ddeb1a13b6803c7.jpg'
            },
        ])
    }

     return (
        <div>
            <h1>Users</h1>

            {
                props.users.map( u => <div key={u.id}>
                    <div><img src={u.photoUrl} alt="" width="50"/></div>
                    <div>
                    { u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                    </div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>{u.location.city}, {u.location.country}</div>
                    <hr/>
                </div>)
            }

            <div>
                <button>Follow</button>
            </div>
        </div>
    );
};

export default Users;