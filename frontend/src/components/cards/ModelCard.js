import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Row } from '@material/react-layout-grid';
import Card, { CardPrimaryContent } from '@material/react-card';
import MaterialIcon from '@material/react-material-icon';
import CardType from './CardType';
import utils from '../../utils/utils';

const ModelCard = (props) => {
  const { model } = props;
  const { name, description, task, publisher, updatedAt } = model;
  return (
    <Card outlined>
      <CardPrimaryContent>
        <CardType
          name={task[0].name}
          icon={utils.getModelTypeIcon(task[0].name)}
          padding="16px 16px 0px 16px"
        />
        <Row style={{ padding: '16px' }}>
          <Cell desktopColumns={12} phoneColumns={4} tabletColumns={8}>
            <h2>{name}</h2>
            <MaterialIcon
              className="inherit-color"
              style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              icon="people"
            />
            <span>{publisher.length > 0 && publisher[0].name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <MaterialIcon
              className="inherit-color"
              style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
              icon="schedule"
            />
            <span>{new Date(updatedAt).toLocaleDateString()}</span>
            <p className="truncate">{description}</p>
          </Cell>
        </Row>
      </CardPrimaryContent>
    </Card>
  );
};

ModelCard.propTypes = {
  model: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    imageLink: PropTypes.string,
    task: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    publisher: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    updatedAt: PropTypes.string,
  }),
};

ModelCard.defaultProps = {
  model: {
    name: null,
    description: null,
    imageLink: null,
    task: [
      {
        name: null,
      },
    ],
    publisher: [
      {
        name: null,
      },
    ],
    updatedAt: null,
  },
};
export default ModelCard;
