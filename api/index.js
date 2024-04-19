const express = require("express");
const cors = require("cors");
const { GetExample } = require("./controllers/Example");

const app = express();
const port = 3001;

app.use(cors());

app.get("/get-example", (req, res) => {
  (async () => {
    try {
      const products = await GetExample();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send();
      console.error("Error on write: ", error.message);
      console.error(error);
    }
  })();
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
