import React from "react";

const Profile_Component = () => {

    const Profile_Photo_Url = "http://127.0.0.1:8000/images/file.png";

    return(
        <img src={Profile_Photo_Url} className="profile_photo" alt="Image..."/>
    );
}

export default Profile_Component;
