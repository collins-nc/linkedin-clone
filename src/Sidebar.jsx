import React from "react";
import "./Sidebar.css";
import bg from "./bcg.jpg";
import "boxicons";


const Sidebar = () => {

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                 #
            </span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bg} alt="" />
        <box-icon
          className="sidebar__avatar"
          size="50px"
          type="solid"
          name="user-circle"
        ></box-icon>
        <h2>Noko Moeketsi</h2>
        <h4>noko.nc@gmail.com</h4>
      </div>
      <div className="sidebar__starts">
        <div className="sidebar__start">
          <div>
            <p>Connections</p>
            <p id="sidebar__black">
              <strong>Grow your network</strong>
            </p>
          </div>
          <p className="sidebar__startNumber">32</p>
        </div>
        <div className="sidebar__start">
          <p>Who viewed you</p>
          <p className="sidebar__startNumber">8</p>
        </div>
      </div>
      <div className="sidebar__addinfo">
        <div className="sidebar__premium">
          <p>Access exlusive tools & insights</p>
          <p id="sidebar__black">
            <strong>Get Hired Fast, Try Premium </strong>
            <br />
            <strong>Free</strong>
          </p>
        </div>
      </div>
      <div className="sidebar__items ">
        <box-icon
          color="gray"
          size="18px"
          name="bookmark"
          type="solid"
        ></box-icon>
        <p id="sidebar__black">My items</p>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("Software engineering")}
        {recentItem("Networks")}
        {recentItem("Angular")}
      </div>
    </div>
  );
};

export default Sidebar;
