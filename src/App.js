import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';
import Home from './pages/Home';
import Header from './components/Header';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="drawer-container">
        <Header />
        <TopAppBarFixedAdjust className="top-app-bar-fix-adjust">
          <Route path="/" exact component={Home} />
        </TopAppBarFixedAdjust>
      </div>
    </Router>
  );
}

export default App;
