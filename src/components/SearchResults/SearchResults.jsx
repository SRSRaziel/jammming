import React from "react";
import "./SearchResults.css"
import TrackList from "../TrackList/TrackList";

export default function SearchResults(props){

    return(
        <>
            <div className="searchResults">
                <TrackList tracks={props.searchResults} onAdd={props.onAdd}/>
            </div>
        </>
    )
    
}