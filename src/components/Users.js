import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Router, Route, browserHistory } from "react-router";
import { Redirect, Link } from "react-router-dom";
import { Blogs } from "./Blogs";


const UserIndex = ({ user, index }) => {
    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${index + 1}`;

    let url = `/blogs/${index + 1}`;

    const handleClick = () => {

    }
    console.log("user===", user);
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.company.name}</td>
            <td><Link to={url}>{user.name}'s Blogs</Link></td>
        </tr>
    )
}
const DisplayUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (!users.length)
            listUsers();
    })
    let listUsers = async () => {
        const users = await fetch("https://jsonplaceholder.typicode.com/users").then(result => result.json());
        setUsers(users);
    }

    // if (!users.length) {
    //     console.log("called");
    //     const usersm = fetch("https://jsonplaceholder.typicode.com/users").then(result => result.json());
    //     setUsers(usersm);
    // }

    return (
        < Table dark >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Blog Posts</th>
                </tr>
            </thead>
            <tbody>
                {users && users.length ? users.map((l, i) => <UserIndex user={l} index={i} />) : null}

            </tbody>
        </Table >
    )
}
export default DisplayUsers;