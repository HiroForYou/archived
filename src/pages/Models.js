import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ModelCard from '../components/ModelCard';

const Models = () => {
  const model = {
    name: 'ResNet-18',
    description:
      'Encoder of greater-than-word length text trained on a variety of data',
    publisher: {
      name: 'Facebook Research',
    },
    imageLink: 'https://avatars3.githubusercontent.com/u/16943930?s=200&v=4',
    updatedAt: '04/22/2020',
  };
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          <ModelCard model={model} />
        </Cell>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          <ModelCard model={model} />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Models;
