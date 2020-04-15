// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comment, setComments] = useState(props.comments);

  console.log(`Comment is: ` + props.comments[0].text)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        props.comments.map( (comment, index) => {
          return <Comment key={index} username={comment.username} text={comment.text}/>
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
