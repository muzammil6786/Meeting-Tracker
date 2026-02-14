import { db } from "../config/db.js";

export const getActions = () =>
  new Promise((resolve, reject) => {
    db.all("SELECT * FROM actions ORDER BY createdAt DESC", (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });

export const createAction = (task, owner, dueDate) =>
  new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO actions(task, owner, dueDate) VALUES(?,?,?)",
      [task, owner, dueDate],
      function (err) {
        if (err) reject(err);
        resolve(this.lastID);
      }
    );
  });

export const updateActionStatus = (id, done) =>
  db.run("UPDATE actions SET done=? WHERE id=?", [done, id]);

export const deleteAction = (id) =>
  db.run("DELETE FROM actions WHERE id=?", [id]);
