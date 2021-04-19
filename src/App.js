import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Page from './Page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
