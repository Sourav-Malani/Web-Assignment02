import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';
import { Link, Snackbar, makeStyles, Card, CardContent, Typography, Grid } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    maxWidth: 1200,
    margin: 'auto'
  },
  card: {
    textDecoration: 'none',
    '&:hover': {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transform: 'scale(1.05)'
    },
    transition: 'transform 0.3s, box-shadow 0.3s'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1)
  },
  description: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await ProductService.getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        setSnackbarMessage('Failed to fetch products.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    };

    fetchProducts();
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className={classes.container}>
      <h2>Product List</h2>
      <Grid container spacing={3}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Link to={`/products/${product._id}`} className={classes.link}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title}>
                      {product.name}
                    </Typography>
                    <Typography color="textSecondary">
                      Version: {product.version}
                    </Typography>
                    <Typography className={classes.description}>
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        ) : (
          <Typography>No products found.</Typography>
        )}
      </Grid>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductList;
