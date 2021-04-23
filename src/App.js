import React from 'react';
import './App.css';
import Header from './Header';
import Page from './Page';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Wrapping everything in Router so any routes made within Router can be access by any other child components */}
        <Header />
        <Page />
    </Router>
  );
}

export default App;
