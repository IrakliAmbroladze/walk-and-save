import express from "express";
import { getToday } from "../controllers/simulation.controller.js";

const router= express.Router();


router.get("/today", getToday);


export default router;