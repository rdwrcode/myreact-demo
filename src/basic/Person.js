import React, { PropTypes } from 'react';
import Icon from './Icon';
import Avatar from './Avatar';
import './Person.css'

const Person = (props) => {
  return (
    <div className="Person">
      <Avatar url={props.avatar} size={200}/>
      <b>{props.name}</b>
      <em>{props.title}</em>
      <ul>
        <li><Icon href={`https://twitter.com/${props.twitter}`} type="twitter"/></li>
        <li><Icon href={`https://github.com/${props.github}`} type="github"/></li>
      </ul>
    </div>
  );
}

Person.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string
};

export default Person;
