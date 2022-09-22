import React from 'react';
import { Grid, Column } from '@carbon/react';

const RequestResponseIndex = () => {
  return (
    <Grid className="tabs-group-content">
      <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
        <h2 className="landing-page__subheading">REQUEST/RESPONSE pattern</h2>
      </Column>
      <Column md={4} lg={{ span: 8, offset: 7 }} sm={4} />
    </Grid>
  );
};

export default RequestResponseIndex;
