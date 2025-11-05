import express from "express";
import { addFertilizer, getFertilizers } from "../controller/Fartilizer.controller.js";

const router = express.Router();


router.post("/addfartilizer",addFertilizer);
router.get("/all", getFertilizers);

export default router;
