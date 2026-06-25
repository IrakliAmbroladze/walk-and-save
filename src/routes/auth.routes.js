import express from "express";
import { register } from "../controllers/register.controller.js";
import { login } from "../controllers/login.controller.js";
import { forgotPassword } from "../controllers/forgotPassword.controller.js";
import { resetPassword } from "../controllers/resetPassword.controller.js";
import { userInfo } from "../controllers/userInfo.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.post("/user-info", userInfo);

export default router;
