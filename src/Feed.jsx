import React from 'react';
import "./Feed.css"
import "boxicons";
import InputOption from './InputOption';
import Post from './Post';


const Feed = () => {
    return (
      <div className="feed">
          <div className="feed__container">

        <div className="feed__top">
          <box-icon size="50px" type="solid" name="user-circle"></box-icon>
          <div className="feed__inputdiv">
            <p>Start a post</p>
          </div>
      </div>
        <div className="feed__inputOptions">
          <InputOption
            color="#70b5f9"
            flip="horizontal"
            icon="photo-album"
            title="Photo"
          />
          <InputOption color="#7fc15e" icon="videos" title="Videos" />
          <InputOption color="#e7a33e" icon="calendar" title="Event" />
          <InputOption color="#fc9295" icon="book" title="Write article " />
        </div>
          </div>
          <div className="feed__line">

          <hr />
          <p id="feed__sort">Sort by:<span id="feed__recent"> Recent</span></p>
          </div>
          <Post/>
        </div>
    );
}

export default Feed;