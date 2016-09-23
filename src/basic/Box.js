import React, { PropTypes } from 'react';
import './Box.css';
import './typography.css';

const Box = (props) => {
  return (
    <div className={`Box Box--${props.size}`} style={props.style}>
      {props.children}
      <p className="heading">check typography</p>
    </div>
  );
};

Box.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object
};

export default Box;
