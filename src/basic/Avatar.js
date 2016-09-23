import React, { PropTypes } from 'react';

const Avatar = (props) => {
  return (
    <img src={props.url} role="presentation" className="Avatar" style={{
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2
    }}/>
  );
}

Avatar.defaultProps = {
  size: 200
};

Avatar.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number
};

export default Avatar;
