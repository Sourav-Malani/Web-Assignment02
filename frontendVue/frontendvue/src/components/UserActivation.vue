<template>
  <div style="padding: 20px; text-align: center">
    <h2>Associate User with License</h2>
    <form @submit.prevent="handleAssociation" style="margin: 0 auto; max-width: 500px">
      <input type="text" placeholder="License ID" v-model="licenseId" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd"/>
      <input type="text" placeholder="User ID" v-model="userId" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd"/>
      <button type="submit" :disabled="isSubmitting" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: none; background-color: #17a2b8; color: white; cursor: pointer">
        {{ isSubmitting ? 'Associating...' : 'Associate User' }}
      </button>
    </form>
    <p v-if="message" style="color: #17a2b8">{{ message }}</p>
  </div>
</template>

<script>
import LicenseService from '../services/LicenseService';

export default {
  name: 'UserActivation',
  data() {
    return {
      licenseId: '',
      userId: '',
      isSubmitting: false,
      message: '',
    };
  },
  methods: {
    async handleAssociation() {
      this.isSubmitting = true;
      try {
        await LicenseService.associateUser(this.licenseId, this.userId);
        this.message = 'User associated with license successfully!';
        this.licenseId = '';
        this.userId = '';
      } catch (error) {
        console.error('Error associating user:', error);
        this.message = 'Failed to associate user with license.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>
