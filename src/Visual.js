import React from 'react';
import {
  XYPlot, 
  XAxis, 
  YAxis, 
  HorizontalGridLines, 
  VerticalGridLines,
  AreaSeries, 
  LineSeries,
  RadialChart } from 'react-vis';

const Visual = () => (
  <div>
    <XYPlot
      width={300}
      height={300}>
    <HorizontalGridLines />
    <LineSeries
      data={[
        {x: 1, y: 10},
        {x: 2, y: 5},
        {x: 3, y: 15}
      ]}/>
    <XAxis />
    <YAxis />
    </XYPlot>
    <XYPlot
      width={300}
      height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        data={[
          {x: 1, y: 10},
          {x: 2, y: 5},
          {x: 3, y: 15}
        ]}/>
    </XYPlot>
    <XYPlot
      margin={{top: 40, right: 40, left: 10, bottom: 10}}
      width={300}
      height={300}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis orientation="top" title="X Axis" />
      <YAxis orientation="right" title="Y Axis" />
      <LineSeries
        data={[
          {x: 1, y: 3, z: 10},
          {x: 2, y: 4, z: 10},
          {x: 3, y: 8, z: 10},
          {x: 4, y: 11, z: 10}
        ]}/>
      <LineSeries
        data={null}/>
      <LineSeries
        data={[
          {x: 1, y: 3, z: 10},
          {x: 2, y: 9, z: 10},
          {x: 3, y: 2, z: 10},
          {x: 4, y: 11, z: 10}
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

export default Visual;