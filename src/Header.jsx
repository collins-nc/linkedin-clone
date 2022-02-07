import React from 'react';
import linkedin from './logo linkedin.png'
import "./Header.css";
import 'boxicons';
import HeaderOption from './HeaderOption';


const Header = () => {
    return (
      <div className="header">
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
          <HeaderOption title="Me" icon="user-circle" />
          <div className="header__verticalLine" />
          <HeaderOption title="Work" icon="grid" />
          <div className='header__end'><p>Get Hired Faster,</p>
            <p>Try Premium Free </p></div>
        </div>
      </div>
    );
}



export default Header;