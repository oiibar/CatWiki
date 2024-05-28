import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import breedsRoutes from "./routes/breeds.router.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://cat-wiki-cli.onrender.com"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api/breeds", breedsRoutes);

try {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
} catch (e) {
  console.log(e);
}
