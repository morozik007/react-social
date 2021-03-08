import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let changeNewPost = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts
            changeNewPost={changeNewPost}
            addNewPost={addNewPost}
            posts={state.profilePage.posts}
            newPostText = {state.profilePage.new_message}
        />
    );
};

export default MyPostsContainer;