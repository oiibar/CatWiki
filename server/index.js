import express from "express";
import cors from "cors";
import breedRoutes from "./routes/breeds.router.js";
//["https://cat-wiki-cli.vercel.app/api"]
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api", breedRoutes);

app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});

export default app;
