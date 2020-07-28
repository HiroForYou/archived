import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer, { DrawerContent } from '@material/react-drawer';
import List, { ListDivider } from '@material/react-list';
import SideNavItem from './SideNavItem';

const sideNavItems = [
  {
    name: 'Quick Links',
    items: [
      {
        id: 0,
        name: 'Home',
        image: null,
        icon: 'home',
        link: '/',
      },
      // {
      //   id: 1,
      //   name: 'Collections',
      //   image: null,
      //   icon: 'collections_bookmark',
      //   link: '/collections',
      // },
      { id: 1, name: 'Models', image: null, icon: 'science', link: '/models' },
      {
        id: 2,
        name: 'Publishers',
        image: null,
        icon: 'people',
        link: '/publishers',
      },
    ],
  },
  {
    name: 'Research Areas',
    items: [
      {
        id: 3,
        name: 'Vision',
        image: null,
        icon: 'visibility',
        link: '/search?researchArea=Vision',
      },
      {
        id: 4,
        name: 'Nlp',
        image: null,
        icon: 'chat',
        link: '/search?researchArea=Nlp',
      },
      {
        id: 5,
        name: 'Audio',
        image: null,
        icon: 'audiotrack',
        link: '/search?researchArea=Audio',
      },
      {
        id: 6,
        name: 'Generative',
        image: null,
        icon: 'grid_on',
        link: '/search?researchArea=Generative',
      },
    ],
  },
  {
    name: 'Model Format',
    items: [
      {
        id: 7,
        name: 'TorchScript',
        icon: null,
        image: 'torchscript.png',
        link: '/search?modelFormat=torchscript',
      },
      {
        id: 8,
        name: 'ONNX',
        icon: null,
        image: 'onnx.png',
        link: '/search?modelFormat=onnx',
      },
    ],
  },
  {
    name: 'Support',
    items: [
      {
        id: 9,
        name: 'About',
        image: null,
        icon: null,
        link: '/about',
      },
      {
        id: 10,
        name: 'Publishing',
        image: null,
        icon: null,
        link: '/publishing',
      },
      {
        id: 11,
        name: 'Contact us',
        image: null,
        icon: null,
        link: '/contact',
      },
      {
        id: 12,
        name: 'Developers',
        image: null,
        icon: null,
        link: '/developers',
      },
    ],
  },
];

const SideNav = (props) => {
  const { drawerAction } = props;
  const { isDrawerOpen } = drawerAction;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Drawer dismissible open={isDrawerOpen}>
      <DrawerContent>
        <List wrapFocus singleSelection selectedIndex={selectedIndex}>
          {sideNavItems.map((section) => (
            <div key={section.name}>
              <span className="sidenav-list-title">{section.name}</span>
              {section.items.map((item) => (
                <SideNavItem
                  key={item.id}
                  idx={item.id}
                  selectedIndexAction={{ selectedIndex, setSelectedIndex }}
                  drawerAction={drawerAction}
                  item={item}
                />
              ))}
              {section.name !== 'Support' ? <ListDivider /> : null}
            </div>
          ))}
        </List>
      </DrawerContent>
    </Drawer>
  );
};

SideNav.propTypes = {
  drawerAction: PropTypes.shape({
    isDrawerOpen: PropTypes.bool,
    setIsDrawerOpen: PropTypes.func,
  }),
};

SideNav.defaultProps = {
  drawerAction: {
    isDrawerOpen: false,
    setIsDrawerOpen: () => null,
  },
};

export default SideNav;
