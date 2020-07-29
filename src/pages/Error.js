import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';

const Error = () => {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={4} phoneColumns={4} tabletColumns={8}>
          <img src="/assets/error.svg" alt="Not Found" width="100%" />
          <h1 align="center">Not Found</h1>
        </Cell>
      </Row>
    </Grid>
  );
};

export default Error;
