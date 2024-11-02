const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully Created a City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a City",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Deleted the City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Delete a City",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        data: {},
        success: false,
        message :"Not able to Get a City",
        err : error 
    })

  }
};

const getAll = async (req, res) => {
    try {
      const response = await cityService.getAllCities();
      return res.status(200).json({
        data: response,
        success: true,
        message: "Successfully fetched list of cities",
        err: {},
      });
    } catch (error) {
      console.error("Error fetching cities:", error); // Improved error logging
      return res.status(500).json({
        data: {},
        success: false,
        message: "Unable to fetch cities",
        err: { message: error.message }, // Only send relevant error details
      });
    }
  };

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Updated a City",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        data: {},
        success: false,
        message :"Not able to update a City",
        err : error 
    })
  }
};

module.exports = {
  create,
  update,
  get,
  getAll,
  destroy,
};
