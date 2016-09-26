import React, {PropTypes} from 'react'

const Message = (props) => (
  <div>
    <h3>Message</h3>
      <div className="Message">
      {props.status.isClicked 
        ? <p style={{color: props.status.colorName}}>Little Menu {props.status.index + 1} {props.status.iconName} clicked</p>
        : <p>Click Button, choose a little one!</p>
      }
      </div>
  </div>
)

Message.propTypes = {
  status: PropTypes.object
};

export default Message
