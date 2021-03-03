import React from 'react'
//import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <h1>Profile</h1>

            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.new_message}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;