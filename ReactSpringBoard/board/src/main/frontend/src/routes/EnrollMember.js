import axios from 'axios';
import React, {useState} from 'react';

export default function EnrollMember() {
    const [memberName, setMemberName] = useState("");


    function handleChange(event) {
        setMemberName(event.target.value);
    }

    function handleSubmit(event) {

        event.preventDefault();

        //POST
        axios.post('/api/enroll_member',{name: memberName})
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })
        .finally(function() {
            document.location.href="/";
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Member Name :
                <input type="text" value={memberName} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}