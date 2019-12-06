import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Table } from "reactstrap";

const DisplayPosts = ({ post, index }) => {
    const url = `/blogs/${post.userId}/${post.id}`;

    return (
        <tr>
            <th>{index + 1}</th>
            <th><Link to={url}>{post.title}</Link></th>
        </tr>
    )
}

const Blogs = ({ userId }) => {

    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    const [post, setPosts] = useState([]);

    useEffect(() => {
        if (!post.length) {
            fetchPosts(userId);
        }
    });

    let fetchPosts = async () => {
        const post = await fetch(URL).then(res => res.json());
        setPosts(post);
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                </tr>
            </thead>
            {post.map((p, i) => <DisplayPosts post={p} index={i} />)}
        </Table>
    )
}

const DisplayBlogs = (props) => {

    const id = parseInt(window.location.href.split('/')[5]);

    return (
        <>
            {<Blogs userId={id} />}
        </>
    )
}

export default DisplayBlogs;