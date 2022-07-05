import axios from 'axios';
import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default function EnrollMember() {
//STATE
    const [memberName, setMemberName] = useState("");
    const [memberId,setMemberId] = useState("");
    const [memberPassword, setMemberPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("Nothing...");

//EVENT HANDLER
    function handleChangeName(event) {
        setMemberName(event.target.value);
    }

    function handleChangeId(event) {
        setMemberId(event.target.value);
    }

    function handleChangePassword(event) {
        setMemberPassword(event.target.value);
    }

    function handleSubmit(event) {

        event.preventDefault();

        //POST REQUEST
        axios.post('/api/enroll_member',{name: memberName, id: memberId, password: memberPassword})
        .then(function(response) {
            setSuccessMessage("[SUCCESS ENROLL MEMBER] "+Object.values(response.data));
        })
        .catch(function(error) {
            setSuccessMessage("[FAIL ENROLL MEMBER] "+error);
        })
        .finally(function() {
            setMemberName("");
            setMemberId("");
            setMemberPassword("");
        })
    }

// VIEW
    return (
        <div>
            <Link to = "/">홈으로</Link>

            <form onSubmit={handleSubmit}>
                <label>
                    Member Name :
                    <input type="text" value={memberName} onChange={handleChangeName} />
                </label>
                <label>
                    Member Id :
                    <input type="text" value={memberId} onChange={handleChangeId} />
                </label>
                <label>
                    Member Password :
                    <input type="text" value={memberPassword} onChange={handleChangePassword} />
                </label>
                <input type="submit" value="Submit"/>
            </form>

            <p>[RESPONSE] {successMessage}</p>
        </div>
    );
}