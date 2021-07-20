import React from "react";
import "../css/Footer.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleRoundedIcon from "@material-ui/icons/ShuffleRounded";
import LoopRoundedIcon from "@material-ui/icons/LoopRounded";
import QueueMusicRoundedIcon from "@material-ui/icons/QueueMusicRounded";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import Slider from "@material-ui/core/Slider";

function Footer() {
    return (
        <div className="footer">
            <div className="album-container">
                <img src="https://pmstudio.com/pmstudio/images/Alec-Benjamin28.jpg" alt="" />
                <div className="album-info">
                    <h4>The Way you Felt</h4>
                    <p>Alec Benjamin</p>
                </div>
            </div>
            <div className="player-control-container">
                <ShuffleRoundedIcon className="icon" />
                <SkipPreviousIcon className="icon" />
                <PlayCircleFilledIcon fontSize="large" className="icon play" />
                <SkipNextIcon className="icon" />
                <LoopRoundedIcon className="icon" />
            </div>
            <div className="volume-control-container">
                <QueueMusicRoundedIcon className="icon" />
                <VolumeDownIcon className="icon volume" />
                <Slider className="icon slider" />
            </div> 
        </div>
    );
}

export default Footer;
