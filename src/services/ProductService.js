// src/services/ProductService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/products';

const ProductService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  },
  // Other API functions for product management
};

export default ProductService;
