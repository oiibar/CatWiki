import express from "express";
import cors from "cors";
import breedRoutes from "./routes/breeds.router.js";

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://cat-wiki-cli.vercel.app/api"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//https://cat-wiki-cli.vercel.app/api

app.use("/api", breedRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
