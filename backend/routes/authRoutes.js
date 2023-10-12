import express from "express";
import authController from "../controllers/authControllers.js";

const router = express.Router();
import auth from "../middlewares/auth_middleware.js";
router.post("/register", authController.signup);
router.post("/login", authController.login);
router.get("/user", auth, authController.get_user);

export default router;
