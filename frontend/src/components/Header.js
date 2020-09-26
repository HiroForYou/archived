import React from 'react';
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          {/* <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon
              className="inherit-color"
              hasRipple
              icon="menu"
              onClick={() => window.dispatchEvent(new CustomEvent('sidenav'))}
            />
          </TopAppBarIcon> */}
          <Link to="/">
            <TopAppBarTitle>TorchExpo</TopAppBarTitle>
          </Link>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
};

export default Header;
