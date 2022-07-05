import axios from 'axios';
import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default function SearchMember() {
//STATE
    const [searchName,setSearchName] = useState("");
    const [searchId,setSearchId] = useState("");
    const [searchMemberList,setSearchMemberList] = useState([]);
    const [successMessage,setSuccessMessage] = useState("Nothing...");

//EVENT HANDLER
    function handleChangeName(event) {
        setSearchName(event.target.value);
    }
    function handleChangeId(event) {
        setSearchId(event.target.value);
    }
    function handleSubmitName(event) {

        event.preventDefault();

        //GET REQUEST
        axios.get('/api/search_member_name',{params:{searchname: searchName}})
        .then(function(response) {
             setSearchMemberList(response.data);
             setSuccessMessage("[SUCCESS SEARCH MEMBER] "+Object.values(response.data));
         })
         .catch(function(error) {
             setSuccessMessage("[FAIL SEARCH MEMBER] "+error);
         })
         .finally(function() {
             setSearchName("");
         })
    }
    function handleSubmitId(event) {
        event.preventDefault();

        //GET REQUEST
        axios.get('/api/search_member_id',{params:{searchid: searchId}})
        .then(function(response) {
             setSuccessMessage("[SUCCESS SEARCH MEMBER] "+Object.values(response.data));
         })
         .catch(function(error) {
             setSuccessMessage("[FAIL SEARCH MEMBER] "+error);
         })
         .finally(function() {
             setSearchId("");
         })
    }


//VIEW
    return (
        <div>
            <Link to = "/">홈으로</Link>

            <form onSubmit={handleSubmitName}>
                Search Name :
                <input type="text" value={searchName} onChange={handleChangeName}/>
                <input type="submit" value="Submit"/>
            </form>

            <form onSubmit={handleSubmitId}>
                Search Id :
                <input type="text" value={searchId} onChange={handleChangeId}/>
                <input type="submit" value="Submit"/>
            </form>

            <p>[RESPONSE] {successMessage}</p>

            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {searchMemberList.map((item) => (
                        <tr key={item.index.toString()}>
                            <td>{item.index}</td>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}