import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import PublisherCard from '../components/PublisherCard';

const Publishers = () => {
  const publisher = {
    name: 'Facebook Research',
    description: '',
    collectionCount: 12,
    modelCount: 43,
    imageLink: 'https://avatars3.githubusercontent.com/u/16943930?s=200&v=4',
  };
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          <PublisherCard publisher={publisher} />
        </Cell>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          <PublisherCard publisher={publisher} />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Publishers;
