import React from 'react'
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    //console.log(props.profile)
    return (
        <div>
            <p>
                <img
                    src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"
                    alt=""
                    height="100"
                    width="100%"
                />
            </p>
            <div className={s.info}>
                <div className={s.userpic}>
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large : userPhoto }
                        alt=""
                    />
                </div>
                <div className={s.description}>
                    <h2>{props.profile.fullName}</h2>
                    <div>{props.profile.aboutMe}</div>
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;