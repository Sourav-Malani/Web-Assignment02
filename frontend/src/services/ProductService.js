import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; // Adjust this URL based on your server configuration

const ProductService = {
  getAllProducts: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getProductById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  addProduct: async (productData) => {
    const response = await axios.post(API_URL, productData);
    return response.data;
  },

  updateProduct: async (id, productData) => {
    const response = await axios.put(`${API_URL}/${id}`, productData);
    return response.data;
  },

  deleteProduct: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
};

export default ProductService;
