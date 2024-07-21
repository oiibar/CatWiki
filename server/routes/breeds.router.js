import express from "express";
import {
  getAllBreeds,
  getBreed,
  getImages,
} from "../controllers/breeds.controller.js";

const router = express.Router();

router.get("/", getAllBreeds);
router.get("/:id", getBreed);
router.get("/images/:id", getImages);

export default router;
