import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const DisplayPosts = ({ post, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{post.title}</th>
        </tr>
    )
}

const Blogs = ({ userId }) => {

    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${userId + 1}`;
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

const DisplayBlogs = () => {
    const URL = "https://jsonplaceholder.typicode.com/users";

    const [post, setPosts] = useState([]);

    useEffect(() => {
        if (!post.length) {
            fetchPosts();
        }
    });

    let fetchPosts = async () => {
        const post = await fetch(URL).then(res => res.json());
        setPosts(post);
    }

    return (
        <>
            {post.map((p, i) => <Blogs userId={p.id} />)}
        </>
    )


}

export default DisplayBlogs;