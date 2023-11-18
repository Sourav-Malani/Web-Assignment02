// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import LicenseActivation from './components/LicenseActivation';
import UserActivation from './components/UserActivation';
import LicenseManagementDashboard from './components/LicenseManagementDashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/add" component={ProductForm} />
          <Route exact path="/licenses/activate" component={LicenseActivation} />
          <Route exact path="/users/activate" component={UserActivation} />
          <Route exact path="/licenses/dashboard" component={LicenseManagementDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
