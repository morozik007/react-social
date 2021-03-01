import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.wrapper}>
      <h2>My Posts</h2>
      <div className={s.form}>
        <div>
          <textarea name="" cols="30" rows="10"></textarea>
        </div>
        <button>Send</button>
      </div>

      <Post likesCount="1" message="Первый нах!" />
      <Post likesCount="4" message="Второй нах!" />
      <Post likesCount="123" message="Очень длинный текст" />
      <Post likesCount="66" message="авароларфарфаофр" />
    </div>
  );
}

export default MyPosts;