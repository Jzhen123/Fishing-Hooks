import React from 'react';
import './App.css';
import Header from './Header';
import Page from './Page';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Header />
      </Switch>
        <Page />
    </Router>
  );
}

export default App;
