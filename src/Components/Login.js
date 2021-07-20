import React from "react";
import "../css/Login.css";
import { loginUrl } from "../spotify";

function Login() {
    return (
        <div className="loginSpotify">
            {/* Spotigy Logo */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            {/* Spotify Login  */}
            <a href={loginUrl}>Login with spotify</a>
        </div>
    );
}

export default Login;
