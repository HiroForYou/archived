import React, { useState, useEffect } from 'react';
import Drawer, { DrawerContent } from '@material/react-drawer';
import List, { ListDivider } from '@material/react-list';
import { useLocation } from 'react-router-dom';
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
        name: 'Publishing',
        image: null,
        icon: null,
        link: '/publishing',
      },
      {
        id: 10,
        name: 'Contact us',
        image: null,
        icon: null,
        link: '/contact',
      },
      {
        id: 11,
        name: 'Developers',
        image: null,
        icon: null,
        link: '/developers',
      },
    ],
  },
];

const getSelectedIndex = (path) => {
  const selectedItem = []
    .concat(...sideNavItems.map((section) => section.items))
    .find((item) => item.link === path);
  return selectedItem ? selectedItem.id : -1;
};

const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const selectedIndex = getSelectedIndex(useLocation().pathname);

  useEffect(() => {
    function handleOnClick() {
      setIsSideNavOpen(!isSideNavOpen);
    }

    window.addEventListener('sidenav', handleOnClick);
    return () => {
      window.removeEventListener('sidenav', handleOnClick);
    };
  }, [isSideNavOpen]);

  return (
    <Drawer dismissible open={isSideNavOpen}>
      <DrawerContent>
        <List wrapFocus singleSelection selectedIndex={selectedIndex}>
          {sideNavItems.map((section) => (
            <div key={section.name}>
              <span className="sidenav-list-title">{section.name}</span>
              {section.items.map((item) => (
                <SideNavItem key={item.id} idx={item.id} item={item} />
              ))}
              {section.name !== 'Support' ? <ListDivider /> : null}
            </div>
          ))}
        </List>
      </DrawerContent>
    </Drawer>
  );
};

export default SideNav;
