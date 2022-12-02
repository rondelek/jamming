import React, { useState } from "react";
import './Playlist.css'
import TrackList from "../TrackList/TrackList";
import Spotify from "../../util/Spotify";


export default function Playlist(props) {

    const [playlistName, setPlaylistName] = useState('My playlist');

    function handlePlaylistNameChange(e) {
        setPlaylistName(e.target.value);
    }

    function savePlaylist() {
        const trackUris = props.playlistTracks.map(track => track.uri);
        Spotify.savePlaylist(playlistName, trackUris).then(() => {
            setPlaylistName('New playlist')
            props.updatePlaylistTracks([])
        })
    }
    

    return (
        <div className="Playlist">
            <input  onChange={handlePlaylistNameChange}
                    placeholder={playlistName}/>
            <TrackList  tracks={props.playlistTracks} 
                        onAdd={props.onAdd} 
                        onRemove={props.onRemove}
                        isRemoval={true}/>
            <button className="Playlist-save" onClick={savePlaylist}>SAVE TO SPOTIFY</button>
        </div>
    )
} 