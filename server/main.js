const express = require("express");
const cors = require("cors");
const app = express();

require("./config/database");

app.use(cors());
app.use(express.json({ limit: "50b" }));

const dotenv = require("dotenv");
dotenv.config();

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  app.listen(8000, () =>
    console.log("Server has started on port http://localhost:8000")
  );
};

startServer();
