import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';

const Home = () => {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={10} phoneColumns={4} tabletColumns={8}>
          <h1>Welcome to TorchExpo</h1>
          <p>
            Collection of trained PyTorch models all under same zoo and ready
            for deployment. TorchExpo is an open initiative and also a project
            created during the PyTorch Summer Hackathon 2020.
          </p>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
          <h2>Browse by Research Area</h2>
          <br />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Home;
