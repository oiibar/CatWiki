import express from "express";
import cors from "cors";
import breedRoutes from "./routes/breeds.router.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["https://cat-wiki-lime-one.vercel.app/"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Example route
app.use("/api/breeds", breedRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
