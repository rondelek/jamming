import React, { useState } from "react";
import './App.css'
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";


export default function App(props) {

  const [searchResults, setSearchResults] = useState([]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    setPlaylistTracks(oldPlaylistTracks => {
      if (oldPlaylistTracks.includes(track)) {
        return oldPlaylistTracks;
      } else {
        return [...oldPlaylistTracks, track];
      }
    })
  }

  function removeTrack(track) {
    setPlaylistTracks(oldPlaylistTracks => oldPlaylistTracks.filter(t => track !== t));
  }


  function searchSpotify(term) {
    Spotify.searchSpotify(term).then(results => {
      setSearchResults(results)
    })
  }


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar  onSearch={searchSpotify}/>
        <div className="App-playlist">
          <SearchResults  searchResults={searchResults} 
                          onAdd={addTrack}
                          onRemove={removeTrack}/>
          <Playlist   playlistTracks={playlistTracks}
                      updatePlaylistTracks={setPlaylistTracks}
                      onAdd={addTrack}
                      onRemove={removeTrack}/>
        </div>
      </div>
    </div>
  );
}
