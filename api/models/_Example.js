const db = require("./_db");

/*
  This is a model file. Only model files are allowed to communicate with the
  database and only controller files should call functions in the model files.
*/

const Get = async () => {
  return db("products");
};

module.exports = {
  Get,
};
