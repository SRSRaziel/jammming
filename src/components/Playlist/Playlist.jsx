import React, { useCallback } from "react";
import "./Playlist.css"
import TrackList from '../TrackList/TrackList';

export default function Playlist(props){

    const handleNameChange = useCallback((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange]);

    return (
        <div className="playlist">
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <TrackList
            tracks={props.playlistTracks}
            isRemoval={true}
            onRemove={props.onRemove}/>
            <button className="playlist-save" onClick={props.onSave}> Send to Spotify </button>
        </div>
    );

}