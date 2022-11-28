import React, { useState } from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";


export default function Playlist(props) {

    const [playlistName, setPlaylistName] = useState('My playlist');

    function handlePlaylistNameChange(e) {
        setPlaylistName(e.target.value);
    }

    return (
        <div className="Playlist">
            <input  onChange={handlePlaylistNameChange}
                    placeholder={playlistName}/>
            <TrackList  tracks={props.playlistTracks} 
                        onAdd={props.onAdd} 
                        onRemove={props.onRemove}
                        isRemoval={true}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
} 