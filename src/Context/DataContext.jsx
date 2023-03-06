import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [logs, setLogs] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const response = await fetch("https://localhost:7242/api/Posts");
      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPostById = async (id) => {
    try {
      const response = await fetch(`https://localhost:7242/api/Posts/${id}`);
      const data = await response.json();
      setPost(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchLogs = async () => {
    try {
      const response = await fetch ("https://localhost:7242/api/Logs");
      const data = await response.json();
      setLogs(data);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        fetchAllPosts,
        setPosts,
        fetchPostById,
        post,
        fetchLogs,
        logs
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
