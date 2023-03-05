import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";

const Post = () => {
  const { id } = useParams();
    const { post, fetchPostById } = useDataContext();

  useEffect(() => {
    console.log(id);
    fetchPostById(id)

  }, []);

  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
    </>
  )
};

export default Post;
