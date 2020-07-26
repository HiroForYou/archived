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
        id: 1,
        name: 'Collections',
        image: null,
        icon: 'collections_bookmark',
        link: '/collections',
      },
      { id: 2, name: 'Models', image: null, icon: 'science', link: '/models' },
      {
        id: 3,
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
        id: 4,
        name: 'Vision',
        image: null,
        icon: 'visibility',
        link: '/search?researchArea=Vision',
      },
      {
        id: 5,
        name: 'Nlp',
        image: null,
        icon: 'chat',
        link: '/search?researchArea=Nlp',
      },
      {
        id: 6,
        name: 'Audio',
        image: null,
        icon: 'audiotrack',
        link: '/search?researchArea=Audio',
      },
      {
        id: 7,
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
        id: 8,
        name: 'TorchScript',
        icon: null,
        image: 'torchscript.png',
        link: '/search?modelFormat=torchscript',
      },
      {
        id: 9,
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
        id: 10,
        name: 'Intro to TorchExpo',
        image: null,
        icon: null,
        link: '/support/intro-torchexpo',
      },
      {
        id: 11,
        name: 'Intro to PyTorch',
        image: null,
        icon: null,
        link: '/support/intro-pytorch',
      },
      {
        id: 12,
        name: 'Publishing',
        image: null,
        icon: null,
        link: '/support/publishing',
      },
    ],
  },
];

const SideNav = (props) => {
  const { isDrawerOpen } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Drawer dismissible open={isDrawerOpen}>
      <DrawerContent>
        <List singleSelection selectedIndex={selectedIndex}>
          {sideNavItems.map((section) => (
            <div key={section.name}>
              <span className="sidenav-list-title">{section.name}</span>
              {section.items.map((item) => (
                <SideNavItem
                  key={item.id}
                  idx={item.id}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
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
  isDrawerOpen: PropTypes.bool,
};

SideNav.defaultProps = {
  isDrawerOpen: false,
};

export default SideNav;
