// src/components/LicenseActivation.js

import React, { useState } from 'react';
import LicenseService from '../services/LicenseService';

const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState('');
  const [userId, setUserId] = useState('');

  const handleActivation = async (e) => {
    e.preventDefault();
    try {
      await LicenseService.activateLicense(licenseKey, userId);
      // Optionally, perform actions after successful activation
      // Clear form inputs or show a success message
    } catch (error) {
      console.error('Error activating license:', error);
      // Handle errors, show error messages, etc.
    }
  };

  return (
    <div>
      <h2>Activate License</h2>
      <form onSubmit={handleActivation}>
        <input type="text" placeholder="License Key" value={licenseKey} onChange={(e) => setLicenseKey(e.target.value)} />
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button type="submit">Activate License</button>
      </form>
    </div>
  );
};

export default LicenseActivation;
