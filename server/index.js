import express from "express";
import { sequelize } from './db.js';
import cors from "cors";
import { router } from "./routes/routes.js";
import { ErrorHandlingMiddleware } from "./middleware/error-handling.middleware.js";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", router);

app.use(ErrorHandlingMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server is started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();