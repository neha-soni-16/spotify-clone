import React from "react";
import "../css/SidebarOption.css";

function SidebarOption(props) {
    return (
        <div className="sidebar-option">
            {props.Icon ? <props.Icon className="sidebar-option-icon" /> : ""}
            {props.Icon ? <h4>{props.title}</h4> : <p>{props.title}</p>}
        </div>
    );
}

export default SidebarOption;
