import express from "express";
import { register } from "../controllers/register.controller.js";
import { login } from "../controllers/login.controller.js";
import { forgotPassword } from "../controllers/forgotPassword.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

export default router;
