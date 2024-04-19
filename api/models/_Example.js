const db = require("./_db");

const Get = async () => {
  return db("products");
};

module.exports = {
  Get,
};
