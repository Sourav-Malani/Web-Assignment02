import React, { useState } from 'react';
import LicenseService from "../services/LicenseService";

const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState('');
  const [userId, setUserId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleActivation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await LicenseService.activateLicense(licenseKey, userId);
      setMessage('License activated successfully!');
      setLicenseKey('');
      setUserId('');
    } catch (error) {
      console.error('Error activating license:', error);
      setMessage('Failed to activate license.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Activate License</h2>
      <form onSubmit={handleActivation} style={styles.form}>
        <input 
          type="text" 
          placeholder="License Key" 
          value={licenseKey} 
          onChange={(e) => setLicenseKey(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="text" 
          placeholder="User ID" 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)} 
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? 'Activating...' : 'Activate License'}
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  form: {
    margin: '0 auto',
    maxWidth: '500px'
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer'
  },
  message: {
    color: '#28a745'
  }
};

export default LicenseActivation;
