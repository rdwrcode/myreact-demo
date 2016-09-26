import React from 'react';
import { VictoryPie, VictoryAxis } from 'victory';

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
    </svg>
    <VictoryPie />
  </div>
)

export default PieChart;
