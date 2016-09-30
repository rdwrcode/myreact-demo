import React, { Component } from 'react';
import AnimatedButtons from './AnimatedButtons';
import Message from './Message';
import './Show.css';

// fontawesome icons v4.6 http://fontawesome.io/icons/
//const childIcons = ['pencil', 'at', 'camera', 'bell', 'comment', 'bolt', 'ban', 'code', 'sign-language'];
const childIcons = ['twitter', 'facebook', 'google', 'github'];
//const childColors = ['#90C3D4', '#C390D4', '#D4A190', '#A1D490'];
const childColors = ['#DE1234', '#9ADE12', '#12DEBC', '#5612DE']; // from www.colorpicker.com

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      iconName: '',
      colorName: 'black',
      isClicked: false
    };

    this.handler = this.handler.bind(this);
  }

  handler(index) {
    this.setState({
      index: index, 
      iconName: childIcons[index], 
      colorName: childColors[index], 
      isClicked: true
    });
    //console.log(childColors[index]);
  }

  render() {
    return (
      <div>
        <h2>Show</h2>
        <div className="Show-content">
          <Message status={this.state}/>
          <AnimatedButtons
            buttons={{mainX: 400, mainY: 330, icons: childIcons}} 
            cb={{fn: this.handler}}
          />
        </div>
      </div>
    );
  }
}

export default Show;
