import React, {useState, useEffect} from "react";	
import {Table} from "reactstrap";
import {Router, Route, browserHistory} from "react-router";
import {Blogs} from "./Blogs";

// const returnComponent = () => {
//     return <Blogs
// }

const UserIndex = ({user, index}) => {
    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${index+1}`;
    //console.log("blogpost", `blogs/${index+1}`);

    let url = `/blogs/${index+1}`;

    const handleClick = () => {
        
    }
    console.log("user===", user);	
    return(	
        <tr>	
            <th scope="row">{index+1}</th>	
            <td>{user.name}</td>	
            <td>{user.company.name}</td>	
            <td><a href={url} target="_blank">{user.name}'s Blogs</a></td>	
        </tr>	
    )	
}	
const DisplayUsers = () => {	
    const [users,setUsers] = useState([]);	
    useEffect(() => {	
        if(!users.length)	
        listUsers();	
    })	
    let listUsers = async () => {	
        const users = await fetch("https://jsonplaceholder.typicode.com/users").then(result => result.json());	
        setUsers(users);	
    }	
    	
    return(	
        <Table dark>	
            <thead>	
                <tr>	
                    <th>#</th>	
                    <th>Name</th>	
                    <th>Company</th>	
                    <th>Blog Posts</th>	
                </tr>	
            </thead>	
            <tbody>	
            {users.map((l,i) => <UserIndex user={l} index={i}/>)}	
            </tbody>	
        </Table>	
    )	
}	
export default DisplayUsers;