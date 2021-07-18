import React, { useEffect, useState } from "react";
import "../css/App.css";
import Login from "./Login";
import Player from "./Player";
import { getTockenFromUserResponse } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayerContextValue } from "../DataLayer";

// Instantiate Spotify Api
const spotifyApi = new SpotifyWebApi();

function App() {
    const [accessToken, setToken] = useState(null);
    const [currentState, dispatch] = DataLayerContextValue();

    useEffect(() => {
        const accessHash = getTockenFromUserResponse();
        window.location.hash = "";
        const token = accessHash.access_token;

        // Setting Access Token value
        if (token) {
            setToken(token);
            spotifyApi.setAccessToken(token);

            spotifyApi.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });
        }
    }, []);

    console.log("current state", currentState.user);

    return <div className="App">{accessToken ? <Player /> : <Login />}</div>;
}

export default App;
