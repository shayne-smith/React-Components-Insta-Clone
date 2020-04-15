//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import DummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        DummyData.map( (post, index) => {
          return <Post key={index} username={post.username} likes ={post.likes} thumbnailUrl={post.thumbnailUrl} imageUrl={post.imageUrl} comments={post.comments}/>
        })
      }
    </div>
  );
};

export default PostsPage;
