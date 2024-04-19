const { Get } = require("../models/_Example");

const GetExample = async () => {
  let products;

  try {
    products = await Get();
  } catch (error) {
    console.error(error);
  }

  return products;
};

module.exports = {
  GetExample,
};
