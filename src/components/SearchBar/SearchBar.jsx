import React, { useState } from "react";
import './SearchBar.css';
import Spotify from "../../util/Spotify";


export default function SearchBar(props) {

    const [searchResults, setSearchResults] = useState([]);

    
    const [searchTerm, setSearchTerm] = useState()


    function searchSpotify() {
        props.onSearch(searchTerm);
    }

    function handleTermChange(e) {
        setSearchTerm(e.target.value);
    }
 
    return (
        <div className="SearchBar">
            <input  onChange={handleTermChange}
                    placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onClick={searchSpotify}>SEARCH</button>
        </div>
    )

}