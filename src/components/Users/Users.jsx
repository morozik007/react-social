import React from 'react'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props);

        console.log('Created');

        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    //console.log(response.data.items)
                    this.props.setUsers(response.data.items)
                })
        }
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 //console.log(response.data.items)
    //                 this.props.setUsers(response.data.items)
    //             })
    //     }
    // }

    render() {
        return <div>
            <h1>Users</h1>
            {
                this.props.users.map( u => <div key={u.id} className={u.id}>
                    <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="" width="50"/></div>
                    <div>
                        <button
                            onClick={u.followed ? () => {this.props.unfollow(u.id)} : () => {this.props.follow(u.id)}}>
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
    }
}

// const Users = (props) => {
//
//     if (props.users.length === 0) {
//         axios.
//             get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => {
//                 //console.log(response.data.items)
//                 props.setUsers(response.data.items)
//             })
//     }
//
//      return (
//         <div>
//             <h1>Users</h1>
//
//             {
//                 props.users.map( u => <div key={u.id} className={u.id}>
//                     <div><img src={u.photos.small ? u.photos.small : userPhoto} alt="" width="50"/></div>
//                     <div>
//                         <button
//                             onClick={u.followed ? () => {props.unfollow(u.id)} : () => {props.follow(u.id)}}>
//                             {u.followed ? 'Unfollow' : 'Follow'}
//                         </button>
//                     </div>
//                     <div>{u.name}</div>
//                     <div>Status: {u.status ? u.status : 'no status'}</div>
//                     <div>{"u.location.city, u.location.country"}</div>
//                     <hr/>
//                 </div>)
//             }
//         </div>
//     );
// };

export default Users;