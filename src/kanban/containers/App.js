import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Lanes from '../components/Lanes';
import {createLane} from '../actions/lanes';

class App extends React.Component {
  render() {
    const {lanes, createLane} = this.props;

    return (
      <div>
        <h2>Kanban</h2>
        <div className="kanban">
          <button className="add-lane"
            onClick={createLane.bind(null, {
              name: 'New lane'
            })}>+</button>
          <Lanes lanes={lanes} />
        </div>
      </div>
    );
  }
}

const ComposedApp = compose(
  connect(state => ({
    lanes: state.lanes
  }), {
    createLane
  }),
  DragDropContext(HTML5Backend)
)(App);

export default ComposedApp;
