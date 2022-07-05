import axios from 'axios';
import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default function Library() {
// STATE
    const [searchBookName,setSearchBookName] = useState("");
    const [successMessage,setSuccessMessage] = useState("Nothing...");

//EVENT HANDLER
    const handleChange = (event) => {
        setSearchBookName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //GET REQUEST
        axios.get('/api/search_bookname',{params:{bookname: searchBookName}})
        .then(function(response) {
            setSuccessMessage("[SUCCESS SEARCH BOOK NAME] "+Object.values(response.data));
        })
        .catch(function(error) {
            setSuccessMessage("[FAIL SEARCH BOOK NAME] "+error);
        })
        .finally(function() {
            setSearchBookName("");
        })
    }

//VIEW
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchBookName} onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
            <p>[RESPONSE] {successMessage}</p>
        </div>
    );
}