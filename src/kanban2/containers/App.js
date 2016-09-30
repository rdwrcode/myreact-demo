import React, { PropTypes } from 'react';

import lanesActions from '../actions/lanes';
import { connect } from 'react-redux';
import Lanes from '../components/Lanes';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import '../Kanban.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 className="app-title">Kanban</h2>
        <div className="kanban">
          <button
            className="add-lane"
            onClick={this.props.onCreateLane}
          >
            <i className="fa fa-plus"/>
          </button>
          <button
            className="reset-store"
            onClick={this.props.onReset}
          >
            <i className="fa fa-refresh" />
          </button>
          <Lanes
            lanes={this.props.lanes}
            onEditLane={this.props.onEditLane}
            onDeleteLane={this.props.onDeleteLane}
            onMoveLane={this.props.onMoveLane}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  lanes: PropTypes.array.isRequired,
  onCreateLane: PropTypes.func.isRequired,
  onDeleteLane: PropTypes.func.isRequired,
  onEditLane: PropTypes.func.isRequired,
  onMoveLane: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  lanes: state.lanes,
});

const mapDispatchToProps = (dispatch) => ({
  onCreateLane() {
    dispatch(lanesActions.createLane('Active'));
  },

  onEditLane(laneId, name) {
    const updatedLane = {
      id: laneId,
    };

    if(name) {
      updatedLane.name = name;
      updatedLane.editing = false;
    } else {
      updatedLane.editing = true;
    }

    dispatch(lanesActions.updateLane(updatedLane));
  },

  onDeleteLane(laneId) {
    dispatch(lanesActions.deleteLane(laneId));
  },

  onMoveLane(sourceId, targetId) {
    dispatch(lanesActions.move('lane', sourceId, targetId));
  },
});

export default DragDropContext(HTML5Backend)(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
