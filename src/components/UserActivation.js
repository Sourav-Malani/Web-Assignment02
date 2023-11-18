// src/components/UserActivation.js

import React, { useState } from 'react';
import LicenseService from '../services/LicenseService';

const UserActivation = () => {
  const [licenseId, setLicenseId] = useState('');
  const [userId, setUserId] = useState('');

  const handleAssociation = async (e) => {
    e.preventDefault();
    try {
      await LicenseService.associateUser(licenseId, userId);
      // Optionally, perform actions after successful association
      // Clear form inputs or show a success message
    } catch (error) {
      console.error('Error associating user:', error);
      // Handle errors, show error messages, etc.
    }
  };

  return (
    <div>
      <h2>Associate User with License</h2>
      <form onSubmit={handleAssociation}>
        <input type="text" placeholder="License ID" value={licenseId} onChange={(e) => setLicenseId(e.target.value)} />
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button type="submit">Associate User</button>
      </form>
    </div>
  );
};

export default UserActivation;
