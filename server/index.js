import express from "express";
import { sequelize } from './db.js';
// import { models } from "./models/models.js";
import cors from "cors";
import { router } from "./routes/routes.js";
import ErrorHandlingMiddleware from "./middleware/errorHandlingMiddleware.js";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", router);

app.use(ErrorHandlingMiddleware);

// app.get("/", (request, response) => {
//   response.status(200).json({ message: "Done!" });
// });

const start = async () => {
  try {
    console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
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