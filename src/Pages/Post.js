import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

const Post = () => {
  const { id } = useParams();
    const { post, fetchPostById } = useDataContext();

  useEffect(() => {
    fetchPostById(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    </>
  )
};

export default Post;
