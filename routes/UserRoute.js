import express from "express";
import {
  deleteUser,
  getUsers,
  saveUser,
  updateUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", saveUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
