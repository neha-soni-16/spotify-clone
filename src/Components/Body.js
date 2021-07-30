import React from "react";
import "../css/Body.css";
import Header from "./Header";
import { DataLayerContextValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import SongTrack from "./SongTrack";

function Body(props) {
    const [currentState, ] = DataLayerContextValue();
    return (
        <div className="body">
            <Header spotify={props.spotify} />
            <div className="body-banner">
                <img
                    src={
                        currentState.discoverMe?.images[0]?.url
                            ? currentState.discoverMe?.images[0]?.url
                            : "https://mosaic.scdn.co/640/ab67616d0000b273459d675aa0b6f3b211357370ab67616d0000b273bab3095cab659556941c2fc7ab67616d0000b273ee0232b590932e81529781e1ab67616d0000b273fe534ab65313f8495ffc52b9"
                    }
                    alt=""
                />
               
                <div className="body-banner-info">
                    <h3>Playlist</h3>
                    <h1>
                        {currentState.discoverMe?.name
                            ? currentState.discoverMe?.name
                            : "Discover"}
                    </h1>
                    <p>
                        {currentState.discoverMe?.description
                            ? currentState.discoverMe?.description
                            : "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday."}
                    </p>
                </div>
            </div>

            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon className="icon play" />
                    <FavoriteRoundedIcon className="icon favorite" />
                    <MoreHorizIcon className="icon more" />
                </div>
                <div className="body-songs-list">
                    {currentState.discoverMeTracks?.items?.map((item) => {
                        return <SongTrack track={item.track} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Body;
