import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GroupedBarChart } from '@carbon/charts-react';
import '@carbon/charts/styles.css';
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import './chart.css';

const DEFAULTOPTION = {
  title: 'Queue Manager 1',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Queues depth',
      thresholds: [
        {
          value: 5000,
          label: 'Max depth',
          fillColor: 'orange',
        },
      ],
    },
    bottom: {
      scaleType: 'labels',
      mapsTo: 'key',
      title: 'Queues',
    },
  },
  height: '350px',
};

const Chart2 = props => {
  const [options, setOption] = useState(DEFAULTOPTION);

  return <GroupedBarChart data={props.data} options={options} />;
};

export default Chart2;
