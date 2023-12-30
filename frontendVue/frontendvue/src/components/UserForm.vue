<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="text-h5">Add User</v-card-title>
          <v-card-text>
            <form @submit.prevent="handleSubmit">
              <v-text-field label="Username" outlined v-model="username"></v-text-field>
              <v-text-field label="Email" outlined v-model="email"></v-text-field>
              <v-btn color="primary" class="mr-4" @click="handleSubmit">Add User</v-btn>
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
import UserService from '../services/UserService';

export default {
  name: 'UserForm',
  data() {
    return {
      username: '',
      email: '',
      openSnackbar: false,
      snackbarMessage: '',
      snackbarSeverity: 'success',
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await UserService.addUser({ username: this.username, email: this.email });
        this.snackbarMessage = 'User added successfully!';
        this.snackbarSeverity = 'success';
        this.openSnackbar = true;
        this.username = '';
        this.email = '';
      } catch (error) {
        console.error('Error adding user:', error);
        this.snackbarMessage = 'Error adding user.';
        this.snackbarSeverity = 'error';
        this.openSnackbar = true;
      }
    },
  },
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
