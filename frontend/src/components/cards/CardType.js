import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material/react-material-icon';

const CardType = (props) => {
  const { name, icon, padding } = props;
  return (
    <small style={{ padding }}>
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
  padding: PropTypes.string,
};

CardType.defaultProps = {
  name: null,
  icon: null,
  padding: null,
};

export default CardType;
