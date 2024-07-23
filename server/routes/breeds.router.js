import express from "express";
import controllers from "../controllers/breeds.controller.js";
const { getAllBreeds, getBreed, getImages } = controllers;

const router = express.Router();

router.get("/", getAllBreeds);
router.get("/:id", getBreed);
router.get("/images/:id", getImages);

export default router;
