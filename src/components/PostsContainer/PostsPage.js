//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import DummyData from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState('')

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        DummyData.map(post => {
          return <Post props={DummyData}/>
        })
      }
    </div>
  );
};

export default PostsPage;
