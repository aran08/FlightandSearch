const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something Went wrong in Service Layer");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something Went wrong in Service Layer");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something Went wrong in Service Layer");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something Went wrong in Service Layer");
      throw error;
    }
  }

  async getAllCities() {
    try {
      const cities = await this.cityRepository.getAllCity();
      return cities;
    } catch (error) {
      console.error("Error retrieving city list in the service layer:", error);
      throw error; // Throw the original error to maintain stack trace
    }
  }
  
}

module.exports = CityService;
