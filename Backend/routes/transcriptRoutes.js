import express from "express";
import {
  extractActions,
  getTranscripts
} from "../controllers/transcriptController.js";

const router = express.Router();

router.post("/", extractActions);
router.get("/", getTranscripts);

export default router;
