import React, { useState } from 'react';
import linkedin from './logo linkedin.png'
import "./Header.css";
import 'boxicons';
import HeaderOption from './HeaderOption';
import $ from "jquery";
import { auth } from './firebase';
import { useDispatch } from "react-redux";
import {logout} from "./features/userSlice";


const Header = () => {

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const profile = ()=>{
    if(!toggle){
      $(".header__me").css({"display":"initial"});
      setToggle(true);
    }else{
      $(".header__me").css({"display":"none"});
      setToggle(false);
    }

  }
  const kickout = () => {
    dispatch(logout());
    auth.signOut();
  };
    return (
      <div className="header">
        <div className="header__me">
          <div className="header__metop">
            <div className="header__user">
              <box-icon type="solid" size="65px" name="user-circle"></box-icon>
              <div className="header__info">
                <p className="header__name">Noko Moeketsi</p>
                <p className="header__descrip">University of something nice</p>
              </div>
            </div>
            <button className="header__btn">View Profile</button>
          </div>
          <div className="header__mid">
            <p className="header__bold">Account</p>
            <p>Setting & Privacy</p>
            <p>Hellp</p>
            <p>Language</p>
          </div>
          <div className="header__secondmid">
            <p className="header__bold">Manage</p>
            <p>Posts & Activities</p>
            <p>Job Posting Account</p>
          </div>
          <div className="header__btm">
            <p onClick={kickout}>Log Out</p>
          </div>
        </div>
        <div className="header__left">
          <img src={linkedin} alt="linkedin" />
          <div className="header__search">
            <box-icon size="20px" name="search"></box-icon>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption title="Home" icon="home" />
          <HeaderOption title="My Network" icon="group" />
          <HeaderOption title="Jobs" icon="briefcase" />
          <HeaderOption title="Messaging" icon="message-rounded-dots" />
          <HeaderOption title="Notifications" icon="bell" />
          <div onClick={profile}>
            <HeaderOption title="Me" icon="user-circle" />
          </div>
          <div className="header__verticalLine" />
          <HeaderOption title="Work" icon="grid" />
          <div className="header__end">
            <p>Get Hired Faster,</p>
            <p>Try Premium Free </p>
          </div>
        </div>
      </div>
    );
}

export default Header;