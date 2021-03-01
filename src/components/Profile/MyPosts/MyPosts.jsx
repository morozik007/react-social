import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts }) => {
  let postsElements = posts.map((post) => (
    <Post key={post.id} likesCount={post.likesCount} message={post.message} />
  ));
  return (
    <div className={s.wrapper}>
      <h2>My Posts</h2>
      <div className={s.form}>
        <div>
          <textarea name="" cols="30" rows="10"></textarea>
        </div>
        <button>Send</button>
      </div>

      {postsElements}
    </div>
  );
};

export default MyPosts;