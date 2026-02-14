import { openai } from "../config/openai.js";

export const healthCheck = async (req, res) => {
  try {
    await openai.models.list();
    res.json({ backend: "ok", db: "ok", llm: "ok" });
  } catch {
    res.status(500).json({ backend: "ok", db: "ok", llm: "error" });
  }
};
