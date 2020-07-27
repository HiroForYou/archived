import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

const CardType = (props) => {
  const { name, icon } = props;
  return (
    <small style={{ padding: '16px 16px 0px 16px' }}>
      <MaterialIcon
        style={{ verticalAlign: 'middle', paddingRight: '0.5rem' }}
        icon={icon}
      />
      <span>{name}</span>
    </small>
  );
};

CardType.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

CardType.defaultProps = {
  name: null,
  icon: null,
};

export default CardType;
