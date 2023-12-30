<template>
  <div style="padding: 20px; text-align: center">
    <h2>Activate License</h2>
    <form @submit.prevent="handleActivation" style="margin: 0 auto; max-width: 500px">
      <input type="text" placeholder="License Key" v-model="licenseKey" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd"/>
      <input type="text" placeholder="User ID" v-model="userId" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd"/>
      <button type="submit" :disabled="isSubmitting" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: none; background-color: #28a745; color: white; cursor: pointer">
        {{ isSubmitting ? 'Activating...' : 'Activate License' }}
      </button>
    </form>
    <p v-if="message" style="color: #28a745">{{ message }}</p>
  </div>
</template>

<script>
import LicenseService from '../services/LicenseService';

export default {
  name: 'LicenseActivation',
  data() {
    return {
      licenseKey: '',
      userId: '',
      isSubmitting: false,
      message: '',
    };
  },
  methods: {
    async handleActivation() {
      this.isSubmitting = true;
      try {
        await LicenseService.activateLicense(this.licenseKey, this.userId);
        this.message = 'License activated successfully!';
        this.licenseKey = '';
        this.userId = '';
      } catch (error) {
        console.error('Error activating license:', error);
        this.message = 'Failed to activate license.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};

</script>
