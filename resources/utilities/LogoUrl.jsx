import React from "react";

const Logo_Component = () => {

    const Logo_Url = "http://127.0.0.1:8000/images/programming.png";

    return(
        <img src={Logo_Url} className="website_logo" alt="Logo..."/>
    );
}

export default Logo_Component;
