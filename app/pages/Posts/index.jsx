import React from "react";
import { useQuery } from "react-query/react";
import axios from "axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery("/posts", () =>
    axios.get("http://localhost:5000/posts"),
  );

  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      {data.data.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
};

export default Posts;
