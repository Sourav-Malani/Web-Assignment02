<template>
  <div style="padding: 20px; text-align: center">
    <h2>Add Product</h2>
    <form @submit.prevent="handleSubmit" style="margin: 0 auto; max-width: 500px">
      <input type="text" placeholder="Name" v-model="name" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd"/>
      <input type="text" placeholder="Version" v-model="version" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd"/>
      <textarea placeholder="Description" v-model="description" style="width: 100%; height: 100px; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd"></textarea>
      <button type="submit" :disabled="isSubmitting" style="width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: none; background-color: #007bff; color: white; cursor: pointer">
        {{ isSubmitting ? 'Adding...' : 'Add Product' }}
      </button>
    </form>
    <p v-if="message" style="color: #007bff">{{ message }}</p>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';

export default {
  name: 'ProductForm',
  data() {
    return {
      name: '',
      version: '',
      description: '',
      isSubmitting: false,
      message: '',
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      try {
        await ProductService.addProduct({ name: this.name, version: this.version, description: this.description });
        this.message = 'Product added successfully!';
        this.name = '';
        this.version = '';
        this.description = '';
      } catch (error) {
        console.error('Error adding product:', error);
        this.message = 'Failed to add product.';
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
