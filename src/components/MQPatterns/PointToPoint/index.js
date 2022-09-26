import React, { useState, useEffect } from 'react';
import { Grid, Column, Button } from '@carbon/react';
import Chart1 from './chart1';
import Chart2 from './chart2';
import APIAdapter from '../../../adapters/API.adapter';
import './index.scss';

const DEFAULT_CHART_VALUE_CHART_2 = [
  {
    group: 'Queue 1',
    key: 'Q1',
    value: 2500,
  },
];

const DEFAULT_CHART_VALUE_CHART_1 = [
  {
    group: 'Queue 1',
    time: '0',
    value: 0,
  },
];

const PointPointIndex = props => {
  const [dataChart1, setDataChart1] = useState(DEFAULT_CHART_VALUE_CHART_1);
  const [time, setTime] = useState(1);
  const [dataChart2, setDataChart2] = useState(DEFAULT_CHART_VALUE_CHART_2);
  const [activeSender, setActiveSender] = useState();
  const [activeReceiver, setActiveReceiver] = useState();

  const adapter = new APIAdapter();

  useEffect(() => {
    if (activeSender) {
      const interval = setInterval(async () => {
        try {
          adapter.put('Hello from client', 1);
          let result = await adapter.getAllDepths();
          updateChart(result);
          console.log(result);
        } catch (e) {
          console.log(e);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  function updateChart(result) {
    if (result) {
      let _dataChart1 = [...dataChart1];
      let _dataChart2 = [...dataChart2];

      result.map(queue => {
        // updating Chart1
        let group = queue['name'];
        let depth = parseInt(queue['depth']);
        _dataChart1.push({
          group: 'QUEUE' + group,
          time: time,
          value: depth * 10,
        });

        // updating Chart2
        // if is not the first time the dataset is populated
        if (dataChart2.length > 1) {
          // for each queue update the last depth
          let i = 0;
          _dataChart2.forEach(e => {
            if (e['key'] === queue['name']) {
              _dataChart2[i]['value'] = parseInt(queue['depth']) * 10;
            }
            i = i + 1;
          });
        } else {
          _dataChart2.push({
            group: 'QUEUE' + group,
            key: group,
            value: depth,
          });
        }
      });
      setDataChart2(_dataChart2);
      setDataChart1(_dataChart1);
      setTime(time + 1);
    }
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let lastDepth = dataChart2[1]['value'];
  //     let _dataChart1 = [...dataChart1];
  //     _dataChart1.push({
  //       group: 'Queue1',
  //       time: time,
  //       value: lastDepth + 100,
  //     });
  //     let _dataChart2 = [...dataChart2];
  //     _dataChart2[1]['value'] = lastDepth + 100;
  //     setDataChart2(_dataChart2);
  //     setDataChart1(_dataChart1);
  //     setTime(time + 1);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // });

  return (
    <Grid className="tabs-group-content">
      <Column md={8} lg={16} sm={4} className="landing-page__tab-content">
        <h2 className="landing-page__subheading">POINT-TO-POINT pattern</h2>
        <p className="landing-page__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          eleifend quis nibh vel lobortis. Nam convallis felis nibh, ac
          tincidunt justo tincidunt vitae. Quisque et eros in dui pellentesque
          eleifend sed in turpis. Nulla facilisi. In dictum eu mauris ac
          convallis. Duis dapibus arcu nibh, at consectetur orci mattis
          consectetur.
        </p>
      </Column>
      <Column md={8} lg={16} sm={4} className="landing-page__r2">
        <Grid>
          <Column md={4} lg={{ offset: 1 }} sm={2}>
            <Button
              onClick={() => {
                setActiveSender(!activeSender);
              }}>
              Active/Stop Sender
            </Button>
          </Column>
          <Column md={4} lg={{ offset: 13 }} sm={2}>
            <Button
              onClick={() => {
                setActiveReceiver(!activeReceiver);
              }}>
              Active/Stop Receiver
            </Button>
          </Column>
        </Grid>
        <Grid className="chartSection">
          <Column md={7} lg={{ offset: 1 }} sm={3}>
            <Chart1 data={dataChart1} />
          </Column>
          <Column md={8} lg={{ offset: 8 }} sm={3}>
            <Chart2 data={dataChart2} />
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default PointPointIndex;
