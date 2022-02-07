import React from 'react';
import "./InputOption.css";

const InputOption = ({flip,color,icon,title}) => {
    return (
      <div className="inputOption">
        <box-icon
          flip={flip}
          color={color}
          type="solid"
          name={icon}
        ></box-icon>
        <h4>{title}</h4>
      </div>
    );
}

export default InputOption;