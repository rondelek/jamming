import React, { useState } from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";


export default function Playlist(props) {

    const [playlistName, setPlaylistName] = useState('My playlist');

    return (
        <div className="Playlist">
            <input  onChange={e => setPlaylistName(e.target.value)}
                    placeholder={playlistName}/>
            <TrackList  tracks={props.playlistTracks} 
                        onAdd={props.onAdd} 
                        onRemove={props.onRemove}
                        isRemoval={true}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
} 