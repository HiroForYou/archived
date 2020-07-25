import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { DrawerAppContent } from '@material/react-drawer';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Error from './pages/Error';
import './App.scss';
import SideNav from './components/SideNav';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Router>
      <div className="drawer-container">
        <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <TopAppBarFixedAdjust className="top-app-bar-fix-adjust">
          <SideNav isDrawerOpen={isDrawerOpen} />
          <DrawerAppContent className="drawer-app-content">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Error />
            </Switch>
          </DrawerAppContent>
        </TopAppBarFixedAdjust>
      </div>
    </Router>
  );
}

export default App;
