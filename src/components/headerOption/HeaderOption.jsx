import React from 'react';
import "./HeaderOption.css";

const HeaderOption = ({icon, title}) => {
    return (
      <div className="headerOption">
        <box-icon size="25px" type="solid" name={icon}></box-icon>
        <h3 className="headerOption__title">{title}</h3>
      </div>
    );
}

export default HeaderOption;