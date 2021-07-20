import React from "react";
import "../css/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player(props) {
    return (
        <div className="player">
            <div className="player-main-container">
                <Sidebar />
                <Body spotify={props.spotify} />
            </div>
            <div className="player-footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default Player;
