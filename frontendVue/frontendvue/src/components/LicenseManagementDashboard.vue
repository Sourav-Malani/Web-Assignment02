<template>
  <div style="padding: 20px; text-align: center">
    <h2>Activated Licenses</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0">
      <thead>
        <tr style="background-color: #007bff; color: white">
          <th>License Key</th>
          <th>Associated User</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="license in licenses" :key="license._id" style="border-bottom: 1px solid #ddd">
          <td>{{ license.key }}</td>
          <td>{{ license.user ? license.user.username : 'Not associated' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import LicenseService from '../services/LicenseService';

export default {
  name: 'LicenseManagementDashboard',
  data() {
    return {
      licenses: [],
    };
  },
  async mounted() {
    try {
      const activatedLicenses = await LicenseService.getActivatedLicensesWithUser();
      this.licenses = activatedLicenses;
    } catch (error) {
      console.error('Error fetching activated licenses:', error);
    }
  }
};
</script>
