import React from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/HomeRounded";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusicRounded";
import SearchIcon from "@material-ui/icons/SearchRounded";
import { DataLayerContextValue } from "../DataLayer";

function Sidebar() {
    const [currentState, dispatch] = DataLayerContextValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar-logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <h1 className="h1-playlist">Playlist</h1>
            <hr />

            {console.log("playlists: ", currentState.playlists.items)}

            {currentState.playlists?.items?.map((playlist) => {
                return <SidebarOption title={playlist.name} />;
            })}
        </div>
    );
}

export default Sidebar;
