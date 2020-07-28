import React from 'react';
import PropTypes from 'prop-types';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { drawerAction } = props;
  const { isDrawerOpen, setIsDrawerOpen } = drawerAction;

  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon
              className="inherit-color"
              hasRipple
              icon="menu"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            />
          </TopAppBarIcon>
          <Link to="/">
            <TopAppBarTitle>TorchExpo</TopAppBarTitle>
          </Link>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};

Header.propTypes = {
  drawerAction: PropTypes.shape({
    isDrawerOpen: PropTypes.bool,
    setIsDrawerOpen: PropTypes.func,
  }),
};

Header.defaultProps = {
  drawerAction: {
    isDrawerOpen: false,
    setIsDrawerOpen: () => null,
  },
};

export default Header;
