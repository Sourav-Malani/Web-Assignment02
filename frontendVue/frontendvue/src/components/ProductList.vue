<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="product in products"
        :key="product._id"
      >
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>Version: {{ product.version }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductService from '../services/ProductService';

export default {
  name: 'ProductList',
  data() {
    return {
      products: [],
      openSnackbar: false,
      snackbarMessage: '',
      snackbarSeverity: 'info',
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const productsData = await ProductService.getAllProducts();
        this.products = productsData;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.snackbarMessage = 'Failed to fetch products.';
        this.snackbarSeverity = 'error';
        this.openSnackbar = true;
      }
    },
    handleCloseSnackbar() {
      this.openSnackbar = false;
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

<style module>
.container {
  padding: 16px;
  max-width: 1200px;
  margin: auto;
}
.card {
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}
.description {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}
.link {
  text-decoration: none;
  color: inherit;
}
</style>
