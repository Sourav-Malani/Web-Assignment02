import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import UserForm from './components/UserForm'; // New component for adding users
import LicenseActivation from './components/LicenseActivation';
import UserActivation from './components/UserActivation';
import LicenseManagementDashboard from './components/LicenseManagementDashboard';
import LicenseForm from './components/LicenseForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              License Management System
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/products">Product List</Button>
            <Button color="inherit" component={Link} to="/products/add">Add Product</Button>
            <Button color="inherit" component={Link} to="/users/add">Add User</Button>
            <Button color="inherit" component={Link} to="/licenses/activate">Activate License</Button>
            <Button color="inherit" component={Link} to="/users/activate">Activate User</Button>
            <Button color="inherit" component={Link} to="/licenses/dashboard">License Dashboard</Button>
            <Button color="inherit" component={Link} to="/licenses/add">Add License</Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<ProductForm />} />
          <Route path="/users/add" element={<UserForm />} /> 
          <Route path="/licenses/activate" element={<LicenseActivation />} />
          <Route path="/users/activate" element={<UserActivation />} />
          <Route path="/licenses/dashboard" element={<LicenseManagementDashboard />} />
          <Route path="/licenses/add" element={<LicenseForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
