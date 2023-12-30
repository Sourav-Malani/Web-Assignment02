import React, { useState } from 'react';
import LicenseService from '../services/LicenseService';

const UserActivation = () => {
  const [licenseId, setLicenseId] = useState('');
  const [userId, setUserId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleAssociation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      await LicenseService.associateUser(licenseId, userId); // Update this line
      setMessage('User associated with license successfully!');
      setLicenseId('');
      setUserId('');
    } catch (error) {
      console.error('Error associating user:', error);
      setMessage('Failed to associate user with license.');
    } finally {
      setIsSubmitting(false);
    }
  };
    return (
    <div style={styles.container}>
      <h2>Associate User with License</h2>
      <form onSubmit={handleAssociation} style={styles.form}>
        <input 
          type="text" 
          placeholder="License ID" 
          value={licenseId} 
          onChange={(e) => setLicenseId(e.target.value)} 
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
          {isSubmitting ? 'Associating...' : 'Associate User'}
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
    backgroundColor: '#17a2b8',
    color: 'white',
    cursor: 'pointer'
  },
  message: {
    color: '#17a2b8'
  }
};

export default UserActivation;
