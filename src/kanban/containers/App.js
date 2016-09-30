import React, { PropTypes } from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from '../components/Lanes';
import { createLane } from '../actions/lanes';

class App extends React.Component {
  render() {
    const {lanes, onCreateLane} = this.props;

    return (
      <div>
        <h2>Kanban</h2>
        <div className="kanban">
          <button className="add-lane"
            onClick={onCreateLane}>
            <i className="fa fa-plus"/>  
          </button>
          <Lanes lanes={lanes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lanes: state.lanes,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateLane() {
    dispatch(createLane({name: 'New Lane'}));
  }
});

App.propTypes = {
  lanes: PropTypes.array.isRequired,
  onCreateLane: PropTypes.func.isRequired,
};

export default DragDropContext(HTML5Backend)(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
