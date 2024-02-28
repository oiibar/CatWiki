import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import breedsRoutes from "./routes/breeds.js";

dotenv.config();
const app = express();
app.use(cors());

app.use("/api/breeds", breedsRoutes);

try {
  app.listen(5000, () => {
    console.log("Listening on port 5000");
  });
} catch (e) {
  console.log(e);
}
