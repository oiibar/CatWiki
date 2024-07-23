import express from "express";
import cors from "cors";
import breedRoutes from "./routes/breeds.router.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://cat-wiki-cli.vercel.app"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Example route
app.use("/api/breeds", breedRoutes);

app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});

export default app;
