import React from 'react';
import { VictoryPie, VictoryAxis, VictoryBar } from 'victory';

const PieChart = () => (
  <div>
    <svg width={450} height={450}>
      <VictoryAxis
        style={{
          axis: {stroke: "black"},
          grid: {strokeWidth: 2},
          ticks: {stroke: "red", size: 7},
          tickLabels: {fontSize: 12},
          axisLabel: {fontsize: 16}
        }}
        label="Histogram"
        tickValues={[
          "1",
          "2",
          "3",
          "4",
          "5"
        ]}
        padding={85}
        standalone={false}/>
      <VictoryAxis dependentAxis
        padding={85}
        standalone={false}/>
      <VictoryBar
        data={[
          {x: 1, y: 1},
          {x: 2, y: 2},
          {x: 3, y: 3},
          {x: 4, y: 2},
          {x: 5, y: 1}
        ]}
      />
    </svg>
    <VictoryPie />
  </div>
)

export default PieChart;
