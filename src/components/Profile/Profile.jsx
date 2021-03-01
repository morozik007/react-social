import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return(
    <div>
      <h1>Profile</h1>
      <p>
        <img src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg" alt=""/>
      </p>
      <MyPosts />
    </div>
  )
}

export default Profile;