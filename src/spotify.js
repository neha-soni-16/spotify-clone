// https://developer.spotify.com/
// documentation/web - playback - sdk / quick - start /

const authSpotifyEndPoint = "https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000/";

const clientId = "fbe36abe268440169998145477f76138";

const scopes = [
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-currently-playing",
];

export const loginUrl = `${authSpotifyEndPoint}?client_id=${clientId}&scope=${scopes.join(
    "%20"
)}&response_type=token&redirect_uri=${redirectURL}&show_dialog=true`;

export const getTockenFromUserResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((accumulator, item) => {
            let parts = item.split("=");
            accumulator[parts[0]] = decodeURIComponent(parts[1]);
            return accumulator;
        }, {});
};

