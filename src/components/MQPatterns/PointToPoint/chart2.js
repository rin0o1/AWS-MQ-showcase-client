import React from 'react';
import ReactDOM from 'react-dom';
import { GroupedBarChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import './chart.css';

class Chart2 extends React.Component {
  state = {
    data: [
      {
        group: 'Queue 1',
        key: 'Q1',
        value: 150,
      },
      {
        group: 'Queue 2',
        key: 'Q2',
        value: 50,
      },
    ],
    options: {
      title: 'Queue Manager 1',
      axes: {
        left: {
          mapsTo: 'value',
          title: 'Queues depth',
        },
        bottom: {
          scaleType: 'labels',
          mapsTo: 'key',
          title: 'Queues',
        },
      },
      height: '500px',
    },
  };

  render = () => (
    <GroupedBarChart data={this.state.data} options={this.state.options} />
  );
}

export { Chart2 };
