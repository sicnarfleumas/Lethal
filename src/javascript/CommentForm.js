import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the logic for submitting a new comment (e.g., send to server)
    onSubmit(newComment);
    // Reset the input field
    setNewComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} />
      </label>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;
