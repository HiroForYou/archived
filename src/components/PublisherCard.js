import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Card, { CardPrimaryContent } from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';

const PublisherCard = (props) => {
  const { publisher } = props;
  const { name, imageLink, collectionCount, modelCount } = publisher;
  return (
    <Card>
      <CardPrimaryContent>
        <small style={{ padding: '16px 16px 0px 16px' }}>
          <MaterialIcon
            style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
            icon="people"
          />
          <span>PUBLISHER</span>
        </small>
        <Grid>
          <Row>
            <Cell desktopColumns={9} phoneColumns={3} tabletColumns={6}>
              <h2>{name}</h2>
            </Cell>
            <Cell desktopColumns={3} phoneColumns={1} tabletColumns={2}>
              <img src={imageLink} className="publisher-image" alt={name} />
            </Cell>
          </Row>
          <br />
          <Row style={{ marginTop: '16px' }}>
            <Cell desktopColumns={6} phoneColumns={2} tabletColumns={4}>
              <MaterialIcon
                icon="collections_bookmark"
                style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              />
              <span>{`${collectionCount} COLLECTIONS`}</span>
            </Cell>
            <Cell desktopColumns={5} phoneColumns={2} tabletColumns={4}>
              <MaterialIcon
                icon="science"
                style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              />
              <span>{`${modelCount} MODELS`}</span>
            </Cell>
          </Row>
        </Grid>
      </CardPrimaryContent>
    </Card>
  );
};

PublisherCard.propTypes = {
  publisher: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageLink: PropTypes.string,
    collectionCount: PropTypes.number,
    modelCount: PropTypes.number,
  }),
};

PublisherCard.defaultProps = {
  publisher: {
    name: null,
    description: null,
    imageLink: null,
    collectionCount: 0,
    modelCount: 0,
  },
};
export default PublisherCard;
