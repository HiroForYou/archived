import React from 'react';
import PropTypes from 'prop-types';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

const Header = (props) => {
  const { isDrawerOpen, setIsDrawerOpen } = props;
  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarIcon tabIndex={0}>
            <MaterialIcon
              icon="menu"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            />
          </TopAppBarIcon>
          <TopAppBarTitle>TorchExpo</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};

Header.propTypes = {
  isDrawerOpen: PropTypes.bool,
  setIsDrawerOpen: PropTypes.func,
};

Header.defaultProps = {
  isDrawerOpen: false,
  setIsDrawerOpen: () => null,
};

export default Header;
