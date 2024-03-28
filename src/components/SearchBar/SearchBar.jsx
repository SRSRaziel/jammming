import React, { useCallback, useState } from "react";
import "./SearchBar.css"

export default function SearchBar(props){

    const [term, setTerm] = useState('');

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, [])

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return(
        <div className="searchbar">
            <input placeholder="Enter a song title" onChange={handleTermChange} type="text"/>
            <button className="searchbutton" onClick={search}> Search </button>
        </div>
    )
    
}