const express = require("express");
const cors = require("cors");
const app = express();

require("./config/database");

app.use(cors());
app.use(express.json());
// app.use(express.json({ limit: "1000b" }));

const dotenv = require("dotenv");
dotenv.config();


const dalleRouter = require("./routers/dalleRouter");

app.use("/", dalleRouter);

const startServer = async () => {
  app.listen(8000, () =>
    console.log("Server has started on port http://localhost:8000")
  );
};

startServer();
