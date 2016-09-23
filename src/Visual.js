import React from 'react';
import {
  XYPlot, 
  XAxis, 
  YAxis, 
  HorizontalGridLines, 
  VerticalGridLines,
  LineSeries,
  RadialChart } from 'react-vis';

const MSEC_DAILY = 86400000;

class Visual extends React.Component {
  render() {
    const timestamp = Date.now();
    return (
      <div>
        <XYPlot
          xType="time"
          width={300}
          height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          <LineSeries
            data={[
              {x: timestamp + MSEC_DAILY, y: 3},
              {x: timestamp + MSEC_DAILY * 2, y: 5},
              {x: timestamp + MSEC_DAILY * 3, y: 15},
              {x: timestamp + MSEC_DAILY * 4, y: 12}
            ]}/>
        </XYPlot>
        <RadialChart
          data={[
            {angle: 2},
            {angle: 3},
            {angle: 5}
          ]}
          width={300}
          height={300} />
      </div>
    )
  }
}

export default Visual;