import React from "react";
import "../css/Body.css";
import Header from "./Header";

function Body(props) {
    return (
        <div className="body">
            <Header spotify={props.spotify} />
        </div>
    );
}

export default Body;
