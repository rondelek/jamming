import React from "react";
import './TrackList.css';
import Track from "../Track/Track";


export default function TrackList(props) {
    console.log(props.tracks)
    console.log(props.tracks.playlistTracks)

    return (
        <div className="TrackList">
            {/* {console.log('TrackList:' + props.tracks)} */}
            {props.tracks.map(track => {
                return <Track   track={track}
                                key={track.id}
                                name={track.name}
                                onAdd={props.onAdd}/>
            })}
            {console.log(props.onAdd)}
        </div>
    )
}