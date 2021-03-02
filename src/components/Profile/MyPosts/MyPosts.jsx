import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} likesCount={post.likesCount} message={post.message} />
  ));

  let newPostText = React.createRef();

  let addNewPost = () => {
    props.addPost(newPostText.current.value);
  };

  let changeNewPost = () => {
    props.changePost(newPostText.current.value);
  };

  return (
    <div className={s.wrapper}>
      <h2>My Posts</h2>
      <div className={s.form}>
        <div>
          <textarea
            onChange={changeNewPost}
            ref={newPostText}
            cols="30"
            rows="10"
            value={props.newPostText}
          />
        </div>
        <button onClick={addNewPost}>Add post</button>
      </div>

      {postsElements}
    </div>
  );
};

export default MyPosts;