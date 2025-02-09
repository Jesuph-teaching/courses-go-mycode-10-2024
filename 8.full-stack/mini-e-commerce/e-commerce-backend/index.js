import "dotenv/config";
import express from "express";
import logger from "./config/logger.js";
import dbConnection from "./config/db.js";
import v1Router from "./routes/v1.js";
import morgan from "morgan";
const app = express();

const PORT = process.env.PORT || 3000;

//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
// adding routes to the application
app.use("/api/v1", v1Router);

dbConnection.then(() => {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    logger.warn(`server listening on ${PORT}`);
  });
});
