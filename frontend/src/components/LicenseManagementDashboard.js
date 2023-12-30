import React, { useState, useEffect } from 'react';
import LicenseService from '../services/LicenseService';

const LicenseManagementDashboard = () => {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    const fetchActivatedLicenses = async () => {
      try {
        const activatedLicenses = await LicenseService.getActivatedLicensesWithUser(); // Use the new method
        setLicenses(activatedLicenses);
      } catch (error) {
        console.error('Error fetching activated licenses:', error);
      }
    };
  
    fetchActivatedLicenses();
  }, []);
  
  return (
    <div style={styles.container}>
      <h2>Activated Licenses</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th>License Key</th>
            <th>Associated User</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map((license) => (
            <tr key={license._id} style={styles.tableRow}>
              <td>{license.key}</td>
              <td>{license.user ? license.user.username : 'Not associated'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0'
  },
  tableHeader: {
    backgroundColor: '#007bff',
    color: 'white'
  },
  tableRow: {
    borderBottom: '1px solid #ddd'
  }
};

export default LicenseManagementDashboard;
