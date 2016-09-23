import React from 'react';

const Icon = (props) => {
  return (
    <a href={props.href} target="_blank" className="Icon">
      <i className={`fa fa-${props.type}`}/>
    </a>
  );
};

export default Icon;