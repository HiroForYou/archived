import React from 'react';
import { Row, Cell, Grid } from '@material/react-layout-grid';

const Publishing = () => {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
          <h2>Publishing</h2>
          <br />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Publishing;
