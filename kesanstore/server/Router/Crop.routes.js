import express from "express";
import { addCrop, getAllCrops } from "../controller/Crop.controller.js";


const router = express.Router();

router.post("/add", addCrop); // ➕
router.get("/all", getAllCrops);

export default router;
