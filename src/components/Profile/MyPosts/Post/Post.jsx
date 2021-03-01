import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <figure className={s.avatar}>
        <img
          src="https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/t/176506_1439783277.jpg"
          alt=""
        />
      </figure>
      <div className={s.message}>
        {props.message}
      </div>
      <div className={s.like}>
        Likes: {props.likesCount}
      </div>
    </div>
  );
}

export default Post;