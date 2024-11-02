//this is used for Database level intraction

const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something wrong for creation of City in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something wrong for Deletion of City in repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      //it will not return updated data
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something wrong for Deletion of City in repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something wrong for Deletion of City in repository layer");
      throw { error };
    }
  }

  async getAllCity() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.error("Error retrieving city list in the repository layer:", error);
      throw error;
    }
  }
  
}

module.exports = CityRepository;
