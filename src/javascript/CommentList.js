import React from 'react';

const CommentList = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <div key={comment.id}>
        <p>{comment.author}</p>
        <p>{comment.text}</p>
      </div>
    ))}
  </div>
);

export default CommentList;
