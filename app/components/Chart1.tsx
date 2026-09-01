import React, { useRef } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Chart1: React.FC = () => {
  // Reference to access the underlying Highcharts chart instance if needed
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // Strictly typed configuration object
  const options: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Value Trends Over Time',
    },
    xAxis: {
      type: 'datetime', // Critical for handling timestamp dates
      title: {
        text: 'Date',
      },
      dateTimeLabelFormats: {
        day: '%e %b %Y', // e.g., 1 Jan 2026
      },
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    tooltip: {
      xDateFormat: '%A, %b %e, %Y',
      shared: true,
    },
    series: [
      {
        name: 'Sample Metrics',
        type: 'line', // Explicitly declare the series type for TypeScript validation
        // Data format: [ [Timestamp_In_Milliseconds, Value], ... ]
        // Remember: JavaScript months are 0-indexed (0 = January)
        data: [
          [1, 29.9],
          [2, 71.5],
          [3, 106.4]
        ],
      },
    ],
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
};

export default Chart1;