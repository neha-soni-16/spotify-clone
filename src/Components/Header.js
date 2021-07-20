import React from "react";
import "../css/Header.css";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { DataLayerContextValue } from "../DataLayer";

function Header(props) {
    const [currentState, dispatch] = DataLayerContextValue();
    return (
        <div className="header">
            <div className="header-toggle">
                <div className="icon-container">
                    <ArrowBackIosIcon className="icon back" />
                </div>

                <div className="icon-container">
                    <ArrowBackIosIcon className="icon front" />
                </div>
            </div>
            <div className="header-info">
                <Avatar
                    className="avatar-icon"
                    src={currentState.user?.images[0]?.url}
                    alt={currentState.user?.display_name}
                />
                <h4 className="avatar-name">
                    {currentState.user?.display_name
                        ? currentState.user?.display_name
                        : "Hello"}
                </h4>
            </div>
        </div>
    );
}

export default Header;
