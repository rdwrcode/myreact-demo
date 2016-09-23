import React, { PropTypes } from 'react';

const Hello = (props) => (
    <div>Hello {props.user.firstName} {props.user.lastName}</div>
);

Hello.defaultProps = {
  user: {}
};

Hello.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  })
};

export default Hello