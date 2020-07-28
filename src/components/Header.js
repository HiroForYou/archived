import React from 'react';
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon
              className="inherit-color"
              hasRipple
              icon="menu"
              onClick={() => window.dispatchEvent(new CustomEvent('sidenav'))}
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

export default Header;
