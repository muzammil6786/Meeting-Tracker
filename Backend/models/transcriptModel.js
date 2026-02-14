import { db } from "../config/db.js";

export const saveTranscript = (text) =>
  db.run("INSERT INTO transcripts(text) VALUES(?)", [text]);

export const getRecentTranscripts = () =>
  new Promise((resolve) => {
    db.all(
      "SELECT * FROM transcripts ORDER BY createdAt DESC",
      (err, rows) => resolve(rows)
    );
  });
