import express from "express";
import {
  fetchActions,
  addAction,
  toggleAction,
  removeAction
} from "../controllers/actionController.js";

const router = express.Router();

router.get("/", fetchActions);
router.post("/", addAction);
router.put("/:id", toggleAction);
router.delete("/:id", removeAction);

export default router;
