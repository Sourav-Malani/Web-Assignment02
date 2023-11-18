// src/components/ProductForm.js

import React, { useState } from 'react';
import ProductService from '../services/ProductService';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ProductService.addProduct({ name, version, description });
      // Optionally, perform actions after successful product addition
      // Clear form inputs or show a success message
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle errors, show error messages, etc.
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Version" value={version} onChange={(e) => setVersion(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
