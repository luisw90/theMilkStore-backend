const express = require("express");

const cors = require("cors");
const { json } = require("express");

const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const data = require("./utils/DummyData");
const { results } = data.DummyData;

app.use(cors());
app.use(json());

router.get("/milk", async (req, res) => {
  return res.status(200).json({ results });
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
