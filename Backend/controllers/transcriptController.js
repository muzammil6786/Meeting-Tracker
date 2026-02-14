import { openai } from "../config/openai.js";
import {
  saveTranscript,
  getRecentTranscripts,
} from "../models/transcriptModel.js";

export const extractActions = async (req, res) => {
  const  transcript  = req.body;

  if (!transcript) {
    return res.status(400).json({ error: "Transcript required" });
  }

  saveTranscript(transcript);

  const prompt = `
Extract action items from the meeting transcript.

Return ONLY JSON array:
[
 { "task": "", "owner": "", "dueDate": "" }
]

Transcript:
"""${transcript}"""
`;

  try {
    const response = await openai.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    const content = response.choices[0].message.content;
    const match = content.match(/\[.*\]/s);
    const data = match ? JSON.parse(match[0]) : [];

    res.json(data);
  } catch (err) {
    console.error("LLM ERROR:", err);
    res.status(500).json({
      error: "LLM failed",
      message: err.message,
    });
  }
};

export const getTranscripts = async (req, res) => {
  const data = await getRecentTranscripts();
  res.json(data);
};
