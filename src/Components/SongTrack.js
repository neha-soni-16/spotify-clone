import React from "react";
import "../css/SongTrack.css"

function SongTrack(props) {
    return (
        <div className="songTrack">

            <div className="track-info">
                <img
                    src="https://mosaic.scdn.co/640/ab67616d0000b273459d675aa0b6f3b211357370ab67616d0000b273bab3095cab659556941c2fc7ab67616d0000b273ee0232b590932e81529781e1ab67616d0000b273fe534ab65313f8495ffc52b9"
                    alt=""
                />
                <div className="song-info">
                    <h3> {props.name} </h3>
                    <p>
                        {props.album.artists
                            .map((artist) => {
                                return artist.name;
                            })
                            .join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SongTrack;
