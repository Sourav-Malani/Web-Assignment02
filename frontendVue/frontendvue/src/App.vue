<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-toolbar-title class="mr-auto">License Management System</v-toolbar-title>
      <div class="d-flex align-end">
        <!-- Align navigation options to the right -->
        <v-btn text color="white" to="/" class="mx-1" small>Home</v-btn>
        <v-btn text color="white" to="/products" class="mx-1" small>Products</v-btn>
        <v-btn text color="white" to="/products/add" class="mx-1" small>Add Product</v-btn>
        <v-btn text color="white" to="/users/add" class="mx-1" small>Add User</v-btn>
        <v-btn text color="white" to="/licenses/activate" class="mx-1" small>Activate License</v-btn>
        <v-btn text color="white" to="/users/activate" class="mx-1" small>Activate User</v-btn>
        <v-btn text color="white" to="/licenses/dashboard" class="mx-1" small>License Dashboard</v-btn>
        <v-btn text color="white" to="/licenses/add" class="mx-1" small>Add License</v-btn>
              </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
