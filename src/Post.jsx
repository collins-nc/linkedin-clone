import React from 'react';
import "./Post.css";
import InputOption from './InputOption';



const Post = ({name,description,message}) => {
    return (
      <div className="post">
        <div className="post__header">
          <box-icon size="50px" type="solid" name="user-circle"></box-icon>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOption flip="horizontal" icon="like" title="Like" />
          <InputOption icon="comment-detail" title="Comment" />
          <InputOption flip="horizontal" icon="share" title="Share" />
          <InputOption rotate="271" icon="send" title="Send" />
        </div>
      </div>
    );
}

export default Post;