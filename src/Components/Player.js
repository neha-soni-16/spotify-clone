import React from "react";
import "../css/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player() {
    return (
        <div className="player">
            <div className="player-main-container">
                <Sidebar />
                <Body />
            </div>
            <div className="player-footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default Player;


