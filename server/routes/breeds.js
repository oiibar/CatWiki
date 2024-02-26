import express from "express";
import { getBreeds, getBreed } from "../controllers/breedsController.js";

const router = express.Router();

router.get("/", getBreeds);
router.get("/:id", getBreed);

export default router;
