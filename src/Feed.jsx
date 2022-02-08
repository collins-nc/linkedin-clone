import React, { useState, useEffect } from "react";
import "./Feed.css";
import "boxicons";
import InputOption from "./InputOption";
import Post from "./Post";
import $ from "jquery";
import { colRef } from "./firebase";
import { getDocs } from "firebase/firestore";

const Feed = () => {
  const [post, setPost] = useState([]);
    useEffect(() => {
      getDocs(colRef)
        .then((snapshot) =>
          setPost(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        )
        .catch((err) => console.log(err.message));
    }, []);

  useEffect(() => {
    getDocs(colRef).then((snapshot) =>
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    ).catch((err)=>console.log(err.message));
    
  }, [post]);

  const postWindo = () => {
    $(".create").css({ display: "initial" });
  };

  return (
    <div className="feed">
      <div className="feed__container">
        <div className="feed__top">
          <box-icon size="50px" type="solid" name="user-circle"></box-icon>
          <div onClick={postWindo} className="feed__inputdiv">
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
          <InputOption
            type="solid"
            color="#7fc15e"
            icon="videos"
            title="Videos"
          />
          <InputOption
            type="solid"
            color="#e7a33e"
            icon="calendar"
            title="Event"
          />
          <InputOption
            type="solid"
            color="#fc9295"
            icon="book"
            title="Write article "
          />
        </div>
      </div>
      <div className="feed__line">
        <hr />
        <p id="feed__sort">
          Sort by:<span id="feed__recent"> Recent</span>
        </p>
      </div>
      {post.map(({ id, data: { name, description, message } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
        />
      ))}

    </div>
  );
};

export default Feed;
