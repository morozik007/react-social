import React from 'react'
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
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
                        src="https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/t/176506_1439783277.jpg"
                        alt=""
                    />
                </div>
                <div className={s.description}>info + description</div>
            </div>
        </div>
    );
}

export default ProfileInfo;