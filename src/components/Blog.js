import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Button, Table } from "reactstrap";

const DisplayComments = ({ comment, index }) => {
  return (
    <>
      <Row className="ml-2">
        Comment {index + 1} : {comment.body}
        Next Index : {index + 2}
      </Row>
    </>
  );
};
const Blog = ({ title, body }) => {
  return (
    <>
      <Row className="ml-2">Title: {title}</Row>
      <Row className="ml-2">Body: {body}</Row>
    </>
  );
};

const DisplayBlog = () => {
  const id = parseInt(window.location.href.split("/")[5]);
  const postId = parseInt(window.location.href.split("/")[6]);
  const URL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  const [post, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!post.length) {
      fetchPosts();
    }
  });

  let fetchPosts = async () => {
    const post = await fetch(URL).then((res) => res.json());
    setPosts(post);
    const user = await post.find((post) => post.id === postId);
    setUser(user);
  };

  let handleClick = async () => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${user.id}`;
    const comments = await fetch(url).then((res) => res.json());
    setComments(comments);
  };

  return (
    <>
      {<Blog title={user.title} body={user.body} />}
      <Button color="primary" onClick={handleClick}>
        Comments
      </Button>
      {comments.length
        ? comments.map((c, i) => <DisplayComments comment={c} index={i} />)
        : ""}
      <Button color="danger">Delete</Button>
    </>
  );
};

export default DisplayBlog;

// ------------------------------------------------------------------------------------

// master   ---> deployed
