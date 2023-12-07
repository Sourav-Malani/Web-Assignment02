import React, { useState } from 'react';
import { makeStyles, TextField, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import LicenseService from '../services/LicenseService';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
    padding: theme.spacing(2),
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const LicenseForm = () => {
    const classes = useStyles();
    const [key, setKey] = useState('');
    const [productID, setProductID] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending data:', { productID }); // Debugging line
      await LicenseService.addLicense({ key, product: productID, recipientEmail });
      // ... rest of your code ...
    } catch (error) {
      console.error('Error adding license:', error);
      // You can log error.response to see more details of the response
      console.log(error.response);
    }
  };
  
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="License Key"
          variant="outlined"
          className={classes.input}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <TextField
          label="Product ID"
          variant="outlined"
          className={classes.input}
          value={productID}
          onChange={(e) => setProductID(e.target.value)}
        />
        <TextField
          label="Recipient Email"
          variant="outlined"
          className={classes.input}
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
        <Button type="submit" color="primary" variant="contained" className={classes.button}>
          Add License
        </Button>
      </form>
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LicenseForm;
