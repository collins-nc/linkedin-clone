import React from 'react';
import "./InputOption.css";

const InputOption = ({rotate,type,flip,color,icon,title}) => {
    return (
      <div className="inputOption">
        <box-icon
        rotate={rotate}
          flip={flip}
          color={color}
          type={type}
          name={icon}
        ></box-icon>
        <h4>{title}</h4>
      </div>
    );
}

export default InputOption;