import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Row } from '@material/react-layout-grid';
import Card, { CardPrimaryContent } from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';

const CollectionCard = (props) => {
  const { collection } = props;
  const { name, description, publisher, updatedAt } = collection;
  return (
    <Card outlined>
      <CardPrimaryContent>
        <small style={{ padding: '16px 16px 0px 16px' }}>
          <MaterialIcon
            style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
            icon="collections_bookmark"
          />
          <span>Collection</span>
        </small>
        <Row style={{ padding: '16px 24px 24px 24px' }}>
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
            <h2>{name}</h2>
            <MaterialIcon
              className="inherit-color"
              style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              icon="people"
            />
            <span>{publisher.name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <MaterialIcon
              className="inherit-color"
              style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              icon="schedule"
            />
            <span>{updatedAt}</span>
            <p>{description}</p>
          </Cell>
        </Row>
      </CardPrimaryContent>
    </Card>
  );
};

CollectionCard.propTypes = {
  collection: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    publisher: PropTypes.shape({
      name: PropTypes.string,
    }),
    updatedAt: PropTypes.string,
  }),
};

CollectionCard.defaultProps = {
  collection: {
    name: null,
    description: null,
    publisher: {
      name: null,
    },
    updatedAt: null,
  },
};
export default CollectionCard;
