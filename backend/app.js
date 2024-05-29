//port info
const dotenv = require("dotenv");
dotenv.config();
const HTTP_PORT = process.env.HTTP_PORT;
const HOST = process.env.HOST;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OpenAIApi = require('openai');
const path = require('path');

//make express server
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const { sequelize } = require("./models");
sequelize.sync();

const openai = new OpenAIApi({
  apiKey: OPENAI_API_KEY,
});

module.exports = { app };

const postController = require("./api/post/postController");
app.use("/", postController);

//check server is running
app.listen(HTTP_PORT, HOST, () => {
  console.log(`server is on http://${HOST}:${HTTP_PORT}`);
});
