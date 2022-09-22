import React from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { Chart } from './chart';
import { Chart2 } from './chart2';
import './index.scss';

const PointPointIndex = () => {
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
            <Button> Active/Stop Sender </Button>
          </Column>
          <Column md={4} lg={{ offset: 13 }} sm={2}>
            <Button> Active/Stop Receiver </Button>
          </Column>
        </Grid>
        <Grid className="chartSection">
          <Column md={7} lg={{ offset: 1 }} sm={3}>
            <Chart />
          </Column>
          <Column md={8} lg={{ offset: 8 }} sm={3}>
            <Chart2 />
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default PointPointIndex;
