// src/components/LicenseManagementDashboard.js

import React, { useState, useEffect } from 'react';
import LicenseService from '../services/LicenseService';

const LicenseManagementDashboard = () => {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    const fetchActivatedLicenses = async () => {
      try {
        const activatedLicenses = await LicenseService.getActivatedLicenses();
        setLicenses(activatedLicenses);
      } catch (error) {
        console.error('Error fetching activated licenses:', error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchActivatedLicenses();
  }, []);

  return (
    <div>
      <h2>Activated Licenses</h2>
      <table>
        <thead>
          <tr>
            <th>License Key</th>
            <th>Associated User</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map((license) => (
            <tr key={license._id}>
              <td>{license.key}</td>
              <td>{license.user ? license.user.username : 'Not associated'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicenseManagementDashboard;
