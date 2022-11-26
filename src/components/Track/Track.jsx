import React from "react";
import './Track.css';


export default function Track(props) {

    function renderAction() {
        if (props.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action" onClick={addTrack}>+</button>
        }
    }

    function addTrack() {
        props.onAdd(props.track);
        console.log('addTrack')
        console.log(props.onAdd)
    }

    
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )

}