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

  const [playlist, setPlaylist] = useState('My playlist');
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
    let tracks = playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    console.log('pushed')
    setPlaylistTracks({playlistTracks: [...playlistTracks, track]});
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {console.log(searchResults)}
        <SearchBar />
        <div className="App-playlist">
          <SearchResults  searchResults={searchResults} 
                          onAdd={addTrack}/>
          <Playlist   playlist={playlist} 
                      playlistTracks={playlistTracks}
                      onAdd={addTrack}/>
        </div>
      </div>
    </div>
  );
}
