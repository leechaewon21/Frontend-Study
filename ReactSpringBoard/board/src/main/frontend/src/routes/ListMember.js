import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default function ListMember() {

    const [memberList, setMemberList] = useState([]);

//FIRST MOUNT
    useEffect(()=> {
           //GET REQUEST
           axios.get('/api/list_member')
           .then(function(response) {
               setMemberList(response.data);
               console.log("[SUCCESS LIST MEMBER] "+Object.values(response.data));
           })
           .catch(function(error) {
               console.log("[FAIL LIST MEMBER] "+error);
           })
    },[]);

//VIEW
    return (
        <div>
            <Link to = "/">홈으로</Link>
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
                    {memberList.map((item) => (
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
    )
}