import React, { useState } from "react";
import './App.css'
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";


export default function App(props) {

  const [searchResults, setSearchResults] = useState([
    {
      name: 'name1',
      artist: 'artist1',
      album: 'album1',
      id: 1
    }, 
    {
      name: 'name2',
      artist: 'artist2',
      album: 'album2',
      id: 2
    }
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: 'playlistName1',
      artist: 'playlistArtist1',
      album: 'playlistAlbum1',
      id: 4
    },
    {
      name: 'playlistName2',
      artist: 'playlistArtist2',
      album: 'playlistAlbum2',
      id: 5
    }
  ]);

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

  function savePlaylist() {
    alert('save playlist')
    const trackUris = playlistTracks.map(track => track.uri);
  }

  function searchSpotify(searchTerm) {
      console.log(searchTerm);
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
                      onAdd={addTrack}
                      onRemove={removeTrack}
                      onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
}
