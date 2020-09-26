import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import CollectionCard from '../components/cards/CollectionCard';

const Collections = () => {
  const collection = {
    name: 'efficientnet',
    description:
      'Collection of EfficientNet models for image classification and feature extraction trained on Imagenet (ILSVRC-2012-CLS).',
    publisher: {
      name: 'Google',
    },
    updatedAt: '04/22/2020',
  };
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          <CollectionCard collection={collection} />
        </Cell>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={8}>
          <CollectionCard collection={collection} />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Collections;
