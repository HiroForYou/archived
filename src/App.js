import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import { DrawerAppContent } from '@material/react-drawer';
import Home from './pages/Home';
import Header from './components/Header';
import './App.scss';
import SideNav from './components/SideNav';
import Error from './pages/Error';
import Models from './pages/models/Models';
import Model from './pages/models/Model';
import Collections from './pages/Collections';
import Publishers from './pages/publishers/Publishers';
import Publisher from './pages/publishers/Publisher';
import Search from './pages/Search';
import Publishing from './pages/support/Publishing';
import Developers from './pages/support/Developers';
import Contact from './pages/support/Contact';

function App() {
  return (
    <Router>
      <div className="drawer-container">
        <Header />
        <TopAppBarFixedAdjust className="top-app-bar-fix-adjust">
          <SideNav />
          <DrawerAppContent className="drawer-app-content">
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/collections" exact component={Collections} />
              <Route path="/models/:id" exact component={Model} />
              <Route path="/models" exact component={Models} />
              <Route path="/publishers/:id" exact component={Publisher} />
              <Route path="/publishers" exact component={Publishers} />
              <Route path="/search" exact component={Search} />

              <Route path="/publishing" exact component={Publishing} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/developers" exact component={Developers} />

              <Error />
            </Switch>
          </DrawerAppContent>
        </TopAppBarFixedAdjust>
      </div>
    </Router>
  );
}

export default App;
