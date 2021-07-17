import React from "react";
import "../css/Login.css";
import { loginUrl } from "../spotify";

function Login() {
    return (
        <div className="loginSpotify">
            {/* Spotigy Logo */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg" alt="" />
            {/* Spotify Login  */}
            <a href={loginUrl}>Login with spotify</a>
        </div>
    );
}

export default Login;
