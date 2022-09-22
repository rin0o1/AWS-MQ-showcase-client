import React from 'react';
import PointPointIndex from '../../components/MQPatterns/PointToPoint/index';
import PubSubIndex from '../../components/MQPatterns/PubSub';
import RequestResponseIndex from '../../components/MQPatterns/RequestResponse';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';

const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <h1 className="landing-page__heading">MQ PATTERNS</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>Point-Point</Tab>
            <Tab>Put/sub</Tab>
            <Tab>Request/Response</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PointPointIndex />
            </TabPanel>
            <TabPanel>
              <PubSubIndex />
            </TabPanel>
            <TabPanel>
              <RequestResponseIndex />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">
              Thousands of businesses worldwide depend on IBM MQ
            </h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            73% of the Fortune 100
          </Column>
          <Column md={4} lg={4} sm={4}>
            73% of the Fortune 100
          </Column>
          <Column md={4} lg={4} sm={4}>
            73% of the Fortune 100
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">Benefits</h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Insulate your business from risks
          </Column>
          <Column md={4} lg={4} sm={4}>
            Simple multi-style messaging
          </Column>
          <Column md={4} lg={4} sm={4}>
            24x7x365 technical support
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;
