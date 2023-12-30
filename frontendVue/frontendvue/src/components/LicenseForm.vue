<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="text-h5">Add License</v-card-title>
          <v-card-text>
            <form @submit.prevent="handleSubmit">
              <v-text-field label="License Key" outlined v-model="key"></v-text-field>
              <v-text-field label="Product ID" outlined v-model="productID"></v-text-field>
              <v-text-field label="Recipient Email" outlined v-model="recipientEmail"></v-text-field>
              <v-btn color="primary" class="mr-4" @click="handleSubmit">Add License</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-snackbar v-model="openSnackbar" :timeout="6000" @input="openSnackbar = false">
    <v-alert :type="snackbarSeverity" outlined text>{{ snackbarMessage }}</v-alert>
  </v-snackbar>
</template>

<script>
import LicenseService from '../services/LicenseService';

export default {
  name: 'LicenseForm',
  data() {
    return {
      key: '',
      productID: '',
      recipientEmail: '',
      openSnackbar: false,
      snackbarMessage: '',
      snackbarSeverity: 'success',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await LicenseService.addLicense({ key: this.key, product: this.productID, recipientEmail: this.recipientEmail });
        this.snackbarMessage = 'License added successfully!';
        this.snackbarSeverity = 'success';
        this.openSnackbar = true;
        // Clear input fields if needed
        this.key = '';
        this.productID = '';
        this.recipientEmail = '';
      } catch (error) {
        console.error('Error adding license:', error);
        this.snackbarMessage = 'Error adding license.';
        this.snackbarSeverity = 'error';
        this.openSnackbar = true;
      }
    },
    handleCloseSnackbar() {
      this.openSnackbar = false;
    }
  }
};
</script>



<style module>
.form {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: fit-content;
  padding: 16px;
}
.input {
  margin: 8px;
}
.button {
  margin: 8px;
}
</style>
