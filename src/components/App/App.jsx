import React, {useCallback, useState} from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from "../../util/Spotify";

export default function App(){

    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const search = useCallback((term) => {
        Spotify.search(term).then(setSearchResults);
    }, []);

    const addTrack = useCallback((track) => {
        if(playlistTracks.some((savedTrack) => savedTrack.id === track.id))
            return;
        setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }, [playlistTracks]);

    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) => prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
    }, []);

    const updatePlaylistName = useCallback((name) => {
        setPlaylistName(name);
    }, []);
    
    const savePlaylist = useCallback(() => {
        const trackUris = playlistTracks.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, trackUris).then(() => {
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks])

    return(
        <>
        <div className="title">Jammming</div>
            <div className="content">
                <section>
                    <div className="box">
                        <SearchBar onSearch={search}/>
                        <SearchResults searchResults={searchResults} onAdd={addTrack}/>
                    </div>
                </section>
                <section>
                    <div className="box">
                        <Playlist
                        playlistName={playlistName}
                        playlistTracks={playlistTracks}
                        onNameChange={updatePlaylistName}
                        onRemove={removeTrack}
                        onSave={savePlaylist}/>
                    </div>
                </section>
            </div>
        </>
    )
}