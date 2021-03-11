import React from 'react'
import axios from "axios";
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {
    // если больше ничего не делает то можно не писать
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        console.log('Created');

        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    //console.log(response.data)
                    this.props.setUsers(response.data.items)
                    // this.props.setTotalUsersCount(response.data.totalCount) // too much data
                    this.props.setTotalUsersCount(100)
                })
        }
    }

    onChangePage = (pageNumber) => {
        //console.log(pageNumber)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                //console.log(response.data)
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        // всегда надо округлять в большую сторону, чтоб показать остаток

        let pages = []
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        // console.log(this.props.currentPage)

        return <div>
            <h1>Users</h1>
            <p className={s.pages}>
                {pages.map( (p, index) => {
                       return <span
                           key={index}
                           className={this.props.currentPage === p && s.current}
                           //onClick={ this.onChangePage(p) }
                           onClick={(e) => {this.onChangePage(p)}}
                           >
                           {p}
                       </span>
                })}
            </p>
            {
                this.props.users.map( (u, index) => <div key={u.id} className={u.id} key={index}>
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