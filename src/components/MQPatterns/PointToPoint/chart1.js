import React from 'react';
import ReactDOM from 'react-dom';
import { LineChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import './chart.css';

const DEFAULTOPTION = {
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
      thresholds: [
        {
          value: 5000,
          label: 'Max depth',
          fillColor: 'orange',
        },
      ],
    },
  },
  curve: 'curveMonotoneX',
  height: '500px',
};

const Chart1 = props => {
  return <LineChart data={props.data} options={DEFAULTOPTION} />;
};

export default Chart1;
