import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom';

const SideNavItem = (props) => {
  const { selectedIndex, setSelectedIndex, item } = props;
  const { id, name, image, icon, link } = item;
  return (
    <Link to={link}>
      <ListItem
        selected={id === selectedIndex}
        onClick={() => setSelectedIndex(id)}
      >
        {icon ? (
          <ListItemGraphic graphic={<MaterialIcon icon={icon} />} />
        ) : (
          <></>
        )}
        {image ? (
          <ListItemGraphic
            graphic={<img src={`/assets/${image}`} alt={name} />}
          />
        ) : (
          <></>
        )}
        <ListItemText primaryText={name} />
      </ListItem>
    </Link>
  );
};

SideNavItem.propTypes = {
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number,
    icon: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }),
};

SideNavItem.defaultProps = {
  selectedIndex: -1,
  setSelectedIndex: () => null,
  item: {
    id: 1,
    icon: null,
    image: null,
    link: null,
  },
};

export default SideNavItem;
