import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map((post, index) => (
        <Post key={index} likesCount={post.likesCount} message={post.message} />
    ));

    let onAddPost = () => {
        props.addNewPost();
    };

    let onChangePost = (e) => {
        props.changeNewPost(e.target.value);
    };

    return (
        <div className={s.wrapper}>
            <h2>My Posts</h2>
            <div className={s.form}>
                <div>
                    <textarea onChange={onChangePost}
                        cols="30"
                        rows="10"
                        value={props.profilePage.new_message}
                    /></div><button onClick={onAddPost}>Add post</button>
            </div>

            {postsElements}
        </div>
    );
};

export default MyPosts;