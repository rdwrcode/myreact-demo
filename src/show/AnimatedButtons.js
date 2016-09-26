import React, {PropTypes} from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import range from 'lodash.range';

import './AnimatedButtons.css';

//Constants 

// Diameter of the main button in pixels
const MAIN_BUTTON_DIAM = 90;
const CHILD_BUTTON_DIAM = 48;

const OFFSET = 0.05;
const SPRING_CONFIG = { stiffness: 400, damping: 28 };

const FLY_OUT_RADIUS = 130,
  SEPARATION_ANGLE = 40; //degrees

// Utility functions
function toRadians(degrees) {
  return degrees * (Math.PI / 180)
}

class AnimatedButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainX: 490,
      mainY: 300,
      childNum: 0,  // 6
      fanAngle: 0,  //5*SEPARATION_ANGLE,
      baseAngle: 0, //(180-5*SEPARATION_ANGLE)/2,
      isOpen: false,
      childButtonIcons: [],
      childButtons: []
    };

    if(!this.props.cb) {
      // TODO
      console.log("no callback is supplied to this component!")
    }

    // Bind this to the functions
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    //this.indentifyButton = this.indentifyButton.bind(this);
    this.finalChildDeltaPositions = this.finalChildDeltaPositions.bind(this);
  }

  finalChildDeltaPositions(index) {
    let angle = this.state.baseAngle + (index * SEPARATION_ANGLE);
    return {
      deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - (CHILD_BUTTON_DIAM / 2),
      deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(angle)) + (CHILD_BUTTON_DIAM / 2)
    };
  }

  componentWillMount() {
    console.log(this.props.buttons.icons.length);
    if(this.props.buttons) {
      this.setState({
        mainX: this.props.buttons.mainX,
        mainY: this.props.buttons.mainY,
        childNum: this.props.buttons.icons.length,
        fanAngle: (this.props.buttons.icons.length-1)*SEPARATION_ANGLE,
        baseAngle: (180-(this.props.buttons.icons.length-1)*SEPARATION_ANGLE)/2,
        childButtonIcons: this.props.buttons.icons
      });
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.closeMenu);
    let childButtons = [];    
    this.setState({ childButtons: childButtons.slice(0) });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenu);
  }

  mainButtonStyles() {
    return {
      width: MAIN_BUTTON_DIAM,
      height: MAIN_BUTTON_DIAM,
      top: this.state.mainY - (MAIN_BUTTON_DIAM / 2),
      left: this.state.mainX - (MAIN_BUTTON_DIAM / 2)
    };
  }

  initialChildButtonStyles() {
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(this.state.mainY - (CHILD_BUTTON_DIAM / 2), SPRING_CONFIG),
      left: spring(this.state.mainX - (CHILD_BUTTON_DIAM / 2), SPRING_CONFIG),
      rotate: spring(-180, SPRING_CONFIG),
      scale: spring(0.5, SPRING_CONFIG)
    };
  }

  initialChildButtonStylesInit() {
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: this.state.mainY - (CHILD_BUTTON_DIAM / 2),
      left: this.state.mainX - (CHILD_BUTTON_DIAM / 2),
      rotate: -180,
      scale: 0.5
    };
  }

  finalChildButtonStylesInit(childIndex) {
    let { deltaX, deltaY } = this.finalChildDeltaPositions(childIndex);
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: this.state.mainY - deltaY,
      left: this.state.mainX + deltaX,
      rotate: 0,
      scale: 1
    };
  }

  finalChildButtonStyles(childIndex) {
    let { deltaX, deltaY } = this.finalChildDeltaPositions(childIndex);
    return {
      width: CHILD_BUTTON_DIAM,
      height: CHILD_BUTTON_DIAM,
      top: spring(this.state.mainY - deltaY, SPRING_CONFIG),
      left: spring(this.state.mainX + deltaX, SPRING_CONFIG),
      rotate: spring(0, SPRING_CONFIG),
      scale: spring(1, SPRING_CONFIG)
    };
  }

  toggleMenu(e) {
    e.stopPropagation();
    let { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  closeMenu(e) {
    this.setState({ isOpen: false });
  }

  renderChildButtons() {
    const { isOpen } = this.state;
    const targetButtonStylesInitObject = range(this.state.childNum).map(i => {
      return isOpen ? this.finalChildButtonStylesInit(i) : this.initialChildButtonStylesInit();
    });

    //StaggeredMotion now takes an Array of object
    const targetButtonStylesInit = Object.keys(targetButtonStylesInitObject).map(key => targetButtonStylesInitObject[key]);

    const targetButtonStyles = range(this.state.childNum).map(i => {
      return isOpen ? this.finalChildButtonStyles(i) : this.initialChildButtonStyles();
    });

    const scaleMin = this.initialChildButtonStyles().scale.val;
    const scaleMax = this.finalChildButtonStyles(0).scale.val;

    let calculateStylesForNextFrame = prevFrameStyles => {
      prevFrameStyles = isOpen ? prevFrameStyles : prevFrameStyles.reverse();

      let nextFrameTargetStyles = prevFrameStyles.map((buttonStyleInPreviousFrame, i) => {
        //animation always starts from first button
        if (i === 0) {
          return targetButtonStyles[i];
        }

        const prevButtonScale = prevFrameStyles[i - 1].scale;
        const shouldApplyTargetStyle = () => {
          if (isOpen) {
            return prevButtonScale >= scaleMin + OFFSET;
          } else {
            return prevButtonScale <= scaleMax - OFFSET;
          }
        };

        return shouldApplyTargetStyle() ? targetButtonStyles[i] : buttonStyleInPreviousFrame;
      });

      return isOpen ? nextFrameTargetStyles : nextFrameTargetStyles.reverse();
    };

    return (
      <StaggeredMotion
        defaultStyles={targetButtonStylesInit}
        styles={calculateStylesForNextFrame}>
        {interpolatedStyles =>
          <div>
            {interpolatedStyles.map(({height, left, rotate, scale, top, width}, index) =>
              <div
                className="child-button"
                key={index}
                style={{
                  left,
                  height,
                  top,
                  transform: `rotate(${rotate}deg) scale(${scale})`,
                  width
                }}
              >
                <i className={"fa fa-" + this.state.childButtonIcons[index] + " fa-lg"}
                  onClick={this.props.cb.fn.bind(null, index)}
                ></i>
              </div>
            )}
          </div>
        }
      </StaggeredMotion>
    );
  }

  render() {
    let { isOpen } = this.state;
    let mainButtonRotation =
      isOpen ? { rotate: spring(0, { stiffness: 500, damping: 30 }) } : { rotate: spring(-135, { stiffness: 500, damping: 30 }) };
    return (
      <div>
        {this.renderChildButtons()}
        <Motion style={mainButtonRotation}>
          {({rotate}) =>
            <div
              className="main-button"
              style={{...this.mainButtonStyles(), transform: `rotate(${rotate}deg)`}}
              onClick={this.toggleMenu}>
              {/*Using fa-close instead of fa-plus because fa-plus doesn't center properly*/}
              <i className="fa fa-close fa-3x"/>
            </div>
          }
        </Motion>
      </div>
    );
  }
};

AnimatedButtons.propTypes = {
  buttons: PropTypes.shape({
    mainX: PropTypes.number,
    mainY: PropTypes.number,
    icons: PropTypes.array
  }),
  cb: PropTypes.object.isRequired
};

export default AnimatedButtons;
