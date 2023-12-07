import React, { useState } from 'react';
import ProductService from '../services/ProductService';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await ProductService.addProduct({ name, version, description });
      setMessage('Product added successfully!');
      setName('');
      setVersion('');
      setDescription('');
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Failed to add product.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="text" 
          placeholder="Version" 
          value={version} 
          onChange={(e) => setVersion(e.target.value)} 
          style={styles.input}
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={styles.textarea}
        />
        <button type="submit" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? 'Adding...' : 'Add Product'}
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  },
  form: {
    margin: '0 auto',
    maxWidth: '500px'
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer'
  },
  message: {
    color: '#007bff'
  }
};

export default ProductForm;
