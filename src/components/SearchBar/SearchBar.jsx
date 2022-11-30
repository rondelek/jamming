import React, { useState } from "react";
import './SearchBar.css';


export default function SearchBar(props) {
    
    const [searchTerm, setSearchTerm] = useState()


    function searchSpotify() {
        props.onSearch(props.term);
    }

    function handleTermChange(e) {
        setSearchTerm(e.target.value);
        console.log('new term: ' + searchTerm)
    }
 
    return (
        <div className="SearchBar">
            <input  onChange={handleTermChange}
                    placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton" onClick={searchSpotify}>SEARCH</button>
        </div>
    )

}