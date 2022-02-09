import React from "react";
import "./Widget.css";
import freecmp from "../../assets/freecamp.jpg";
import fnb from "../../assets/FNB.jpg";
import randw from "../../assets/Randwater.jpg";
import logo from "../../assets/LinkedinPic.png";

const widgetBlock = (pic, title, name) => (
  <div className="widget__block">
    <div className="widget__pic">
      <img src={pic} alt="I" />
    </div>
    <div className="widget__info">
      <p className="widget__title">{title}</p>
      <p>
        Company <span>{name}</span>
      </p>
      <div className="widget__btn">
        <box-icon color="gray" name="plus"></box-icon>
        <p>Follow</p>
      </div>
    </div>
  </div>
);

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__topBlock">
        <div className="widget__top">
          <p className="widget__title">Add to your feed</p>
          <box-icon type="solid" name="info-square"></box-icon>
        </div>
        <div className="widget__mid">
          {widgetBlock(freecmp, "freeCodeCamp", "E-Learning")}
          {widgetBlock(randw, "Rand Water", "Utiities")}
          {widgetBlock(fnb, "FNB South Africa", "Banking")}
        </div>
        <div className="widget__bottom">
          <p>View all recommendations</p>
          <box-icon color="gray" name="right-arrow-alt"></box-icon>
        </div>
      </div>
      <div className="widget__btmBlock">
        <div className="widget__first">
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
        </div>
        <div className="widget__second">
            <p>Privacy & Terms</p>
            <p>Ad Choice</p>
        </div>
        <div className="widget__third">
            <p>Advertising</p>
            <p>Business Service</p>
        </div>
        <div className="widget__last">
            <p>Get the Linkedin app</p>
            <p>More</p>
        </div>
        <div className="widget__copyright">
            <img src={logo} alt="logo"/>
            <p>Linkedin Corporation @ 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
