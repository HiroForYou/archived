import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { DrawerAppContent } from '@material/react-drawer';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import './App.scss';
import SideNav from './components/SideNav';
import Models from './pages/Models';
import Collections from './pages/Collections';
import Publishers from './pages/Publishers';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  return (
    <Router>
      <div className="drawer-container">
        <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <TopAppBarFixedAdjust className="top-app-bar-fix-adjust">
          <SideNav isDrawerOpen={isDrawerOpen} />
          <DrawerAppContent className="drawer-app-content">
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />

            <Route path="/collections" exact component={Collections} />
            <Route path="/models" exact component={Models} />
            <Route path="/publishers" exact component={Publishers} />
          </DrawerAppContent>
        </TopAppBarFixedAdjust>
      </div>
    </Router>
  );
}

export default App;
