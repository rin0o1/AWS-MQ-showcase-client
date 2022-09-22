import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import './chart.css';

class Chart extends React.Component {
  state = {
    data: [
      {
        group: 'Queue1',
        time: '0',
        value: 10,
        subplus: 100,
      },
      {
        group: 'Queue1',
        time: '1',
        value: 150,
      },
      {
        group: 'Queue1',
        time: '2',
        value: 160,
      },
      {
        group: 'Queue2',
        time: '0',
        value: 1100,
      },
      {
        group: 'Queue2',
        time: '1',
        value: 2000,
      },
      {
        group: 'Queue2',
        time: '2',
        value: 3000,
      },
    ],
    options: {
      title: 'Queue manager 1',
      axes: {
        bottom: {
          title: 'Time',
          mapsTo: 'time',
          scaleType: 'linear',
        },
        left: {
          mapsTo: 'value',
          title: 'Queues depth',
          scaleType: 'linear',
        },
      },
      curve: 'curveMonotoneX',
      height: '500px',
    },
  };

  render = () => (
    <LineChart data={this.state.data} options={this.state.options} />
  );
}

export { Chart };
