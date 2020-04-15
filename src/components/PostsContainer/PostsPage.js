//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import DummyData from "../../dummy-data";

const PostsPage = (props) => {
  // set up state for your data
  const [postData, setPostData] = useState(DummyData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        postData.map( (post, index) => {
          return <Post key={index} username={post.username} likes ={post.likes} thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} comments={post.comments}/>
        })
      }
    </div>
  );
};

export default PostsPage;
