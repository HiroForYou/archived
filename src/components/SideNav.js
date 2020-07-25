import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer, { DrawerContent } from '@material/react-drawer';
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListDivider,
} from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';

const SideNav = (props) => {
  const { isDrawerOpen } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Drawer dismissible open={isDrawerOpen}>
      <DrawerContent>
        <List singleSelection selectedIndex={selectedIndex}>
          <span className="sidenav-list-title">Quick Links</span>
          <ListItem onClick={() => setSelectedIndex(0)}>
            <ListItemGraphic
              graphic={<MaterialIcon icon="collections_bookmark" />}
            />
            <ListItemText primaryText="Collections" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(1)}>
            <ListItemGraphic graphic={<MaterialIcon icon="bookmark" />} />
            <ListItemText primaryText="Models" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(2)}>
            <ListItemGraphic graphic={<MaterialIcon icon="people" />} />
            <ListItemText primaryText="Publishers" />
          </ListItem>
          <ListDivider />
        </List>
        <List singleSelection selectedIndex={selectedIndex}>
          <span className="sidenav-list-title">Research Areas</span>
          <ListItem onClick={() => setSelectedIndex(0)}>
            <ListItemGraphic graphic={<MaterialIcon icon="insert_photo" />} />
            <ListItemText primaryText="Vision" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(1)}>
            <ListItemGraphic graphic={<MaterialIcon icon="chat" />} />
            <ListItemText primaryText="Nlp" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(2)}>
            <ListItemGraphic graphic={<MaterialIcon icon="audiotrack" />} />
            <ListItemText primaryText="Audio" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(2)}>
            <ListItemGraphic graphic={<MaterialIcon icon="grid_on" />} />
            <ListItemText primaryText="Generative" />
          </ListItem>
          <ListDivider />
        </List>
      </DrawerContent>
    </Drawer>
  );
};

SideNav.propTypes = {
  isDrawerOpen: PropTypes.bool,
};

SideNav.defaultProps = {
  isDrawerOpen: false,
};

export default SideNav;
