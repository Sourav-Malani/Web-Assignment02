import License from '../models/licenses';

class LicenseService {
  async generateLicense(productId, userId) {
    try {
      const newLicense = new License({
        product: productId,
        user: userId,
        // Generate a unique license key here if needed
        // licenseKey: generateUniqueKey(),
        // Set other properties as required
      });

      const savedLicense = await newLicense.save();
      return savedLicense;
    } catch (error) {
      throw new Error(`Error generating license: ${error.message}`);
    }
  }

  async getLicensesForUser(userId) {
    try {
      const licenses = await License.find({ user: userId }).populate('product', 'name version'); // Assuming 'product' is a reference to the Product model
      return licenses;
    } catch (error) {
      throw new Error(`Error fetching licenses for user: ${error.message}`);
    }
  }

  // Implement other methods for managing licenses as per your requirements
}

module.exports = new LicenseService();