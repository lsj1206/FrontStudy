import React from "react";
import './styles.css';

const comments = [
  {
    index : 1,
    name: "Name-1",
    comment: "Comment-1",
  },
  {
    index : 2,
    name: "Name-2",
    comment: "Comment-2",
  },
  {
    index : 3,
    name: "Name-3",
    comment: "Comment-3",
  },
]

function Comment(props) {
  return (
    <div className="wrapper">
      <div className="imageContainer">
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"></img>
    </div>
      <div className="contentContainer">
        <span className="nameText">{props.name}</span>
        <span className="commentText">{props.comment}</span>
      </div>
    </div>
  );
}

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return ( <Comment key={comment.index} name={comment.name} comment={comment.comment} /> );
      })}
    </div>
  );
}

export default CommentList;
