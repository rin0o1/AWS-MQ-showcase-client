import React, { useState, useEffect } from 'react';
import { Grid, Column, Button, PrimaryButton } from '@carbon/react';
import Chart1 from './chart1';
import Chart2 from './chart2';
import APIAdapter from '../../../adapters/API.adapter';
import './index.scss';
import { color } from '@carbon/charts/configuration-non-customizable';

const PointPointIndex = props => {
  const [dataChart1, setDataChart1] = useState([]);
  const [dataChart2, setDataChart2] = useState([]);
  const [time, setTime] = useState(1);
  const [isActiveProducer, setIsActiveProducer] = useState();
  const [isActiveConsumer, setIsActiveConsumer] = useState();

  const adapter = new APIAdapter();

  useEffect(() => {
    if (isActiveProducer) {
      const interval = setInterval(async () => {
        try {
          const min = 10;
          const max = 100;
          let randomQuantity = generateRandomNumber(min, max);
          adapter.put('Hello from client', randomQuantity);
          let result = await adapter.getAllDepths();
          updateChart(result);
        } catch (e) {
          console.log(e);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  function generateRandomNumber(min, max) {
    return min + Math.random() * (max - min);
  }

  useEffect(() => {
    if (isActiveConsumer) {
      const interval = setInterval(async () => {
        try {
          const min = 10;
          const max = 100;
          let randomQuantity = generateRandomNumber(min, max);
          let messages = await adapter.getFromLimit(randomQuantity);
          let result = await adapter.getAllDepths();
          updateChart(result);
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
          group: 'QUEUE ' + group,
          time: time,
          value: depth,
        });

        // updating Chart2
        // if is not the first time the dataset is populated
        if (dataChart2.length > 0) {
          // for each queue update the last depth
          let i = 0;
          _dataChart2.forEach(e => {
            if (e['key'] === queue['name']) {
              _dataChart2[i]['value'] = parseInt(queue['depth']);
            }
            i = i + 1;
          });
        } else {
          _dataChart2.push({
            group: 'QUEUE ' + group,
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
              tooltip="hello"
              kind={isActiveProducer ? 'primary' : 'secondary'}
              onClick={() => {
                setIsActiveProducer(!isActiveProducer);
              }}>
              {isActiveProducer ? 'Stop' : 'Start'} Producer
            </Button>
          </Column>
          <Column md={4} lg={{ offset: 13 }} sm={2}>
            <Button
              kind={isActiveConsumer ? 'primary' : 'secondary'}
              onClick={() => {
                setIsActiveConsumer(!isActiveConsumer);
              }}>
              {isActiveConsumer ? 'Stop' : 'Start'} Consumer
            </Button>
          </Column>
        </Grid>
        {dataChart1.length > 1 && dataChart1.length > 1 ? (
          <Grid className="chartSection">
            <Column md={7} lg={{ offset: 1 }} sm={3}>
              <Chart1 data={dataChart1} />
            </Column>
            <Column md={8} lg={{ offset: 8 }} sm={3}>
              <Chart2 data={dataChart2} />
            </Column>
          </Grid>
        ) : (
          <Grid className="chartSection">
            <Column md={8} lg={{ offset: 5 }} sm={4}>
              <p className="landing-page__p">
                Start either the Producer or the Consumer to test the effect of
                this pattern.
              </p>
            </Column>
          </Grid>
        )}
      </Column>
    </Grid>
  );
};

export default PointPointIndex;
