import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Adjust as per your backend configuration

const UserService = {
  addUser: async (userData) => {
    const response = await axios.post(API_URL, userData);
    return response.data;
  },

  getUserById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  updateUser: async (id, updateData) => {
    const response = await axios.put(`${API_URL}/${id}`, updateData);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },

  // Additional methods for other operations can be added here
};

export default UserService;
