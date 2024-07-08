import React from 'react';
import '../PostComponent/PostModel.css';

function PostEdit_Detete({ closeModal }) {
  return (
    <div className="modelWrapp" onClick={closeModal}>
      <div className="postEdit_delete">
        <h2>Edit</h2>
        <h2>Delete</h2>
      </div>
    </div>
  )
}

export default PostEdit_Detete;