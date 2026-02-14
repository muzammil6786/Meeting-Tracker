import {
  getActions,
  createAction,
  updateActionStatus,
  deleteAction
} from "../models/actionModel.js";

export const fetchActions = async (req, res) => {
  const data = await getActions();
  res.json(data);
};

export const addAction = async (req, res) => {
  const { task, owner, dueDate } = req.body;
  const id = await createAction(task, owner, dueDate);
  res.json({ id });
};

export const toggleAction = (req, res) => {
  updateActionStatus(req.params.id, req.body.done);
  res.json({ success: true });
};

export const removeAction = (req, res) => {
  deleteAction(req.params.id);
  res.json({ success: true });
};
