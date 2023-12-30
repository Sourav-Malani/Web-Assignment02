import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/licenses'; // Adjust this URL based on your server configuration

const LicenseService = {
  getAllLicenses: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getLicenseById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  activateLicense: async (licenseKey, userId) => {
    const response = await axios.post(`${API_URL}/activate`, { licenseKey, userId });
    return response.data;
  },  
  addLicense: async (licenseData) => {
    const response = await axios.post(API_URL, licenseData);
    return response.data;
  },
  
  associateUser: async (licenseId, userId) => {
    const response = await axios.post(`${API_URL}/associate`, { licenseId, userId });
    return response.data;
  },
  getActivatedLicenses: async () => {
    const response = await axios.get(`${API_URL}/activated`);
    return response.data;
  },
    // Add a new method to fetch activated licenses with associated user data
  getActivatedLicensesWithUser: async () => {
    const response = await axios.get(`${API_URL}/activated-with-user`);
    return response.data;
  }
  // Additional methods for other operations like createLicense, deleteLicense, etc., can be added here
};

export default LicenseService;
