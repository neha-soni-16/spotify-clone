import React, { useEffect } from "react";
import "../css/App.css";
import Login from "./Login";
import Player from "./Player";
import { getTockenFromUserResponse } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayerContextValue } from "../DataLayer";

// Instantiate Spotify Api
const spotifyApi = new SpotifyWebApi();

function App() {
    const [currentState, dispatch] = DataLayerContextValue();

    useEffect(() => {
        const accessHash = getTockenFromUserResponse();
        window.location.hash = "";
        const token = accessHash.access_token;

        // Setting Access Token value
        if (token) {
            dispatch({
                type: "SET_TOKEN",
                token: token,
            });

            spotifyApi.setAccessToken(token);

            spotifyApi.getMe().then((user) => {
                return new Promise((resolve, reject) => {
                    resolve(
                        dispatch({
                            type: "SET_USER",
                            user: user,
                        })
                    );
                });
            });

            spotifyApi.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });

                dispatch({
                    type: "SET_DISCOVER_ME",
                    discoverMe: playlists.items[0],
                });

                const playlistId = playlists.items[0].id;

                spotifyApi.getPlaylistTracks(playlistId).then((tracks) => {
                    dispatch({
                        type: "SET_DISCOVER_ME_TRACK",
                        discoverMeTracks: tracks,
                    });
                });
            });

            console.log("hoii");

            // spotifyApi.getPlaylist(currentState.playlists.items[0].id).then((playlist) => {
            //     dispatch({
            //         type: "SET_DISCOVER_WEEKLY",
            //         discoverWeekly: playlist,
            //     });
            // });
        }
    }, []);

    return (
        <div className="App">
            {currentState.accessToken ? (
                <Player spotify={spotifyApi} />
            ) : (
                <Login />
            )}
        </div>
    );
}

export default App;
