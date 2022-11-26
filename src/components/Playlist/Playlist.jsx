import React from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";


export default function Playlist(props) {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList tracks={props.playlistTracks} onAdd={props.onAdd}/>
            {console.log('Playlist:' + props.playlistTracks)}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )

} 