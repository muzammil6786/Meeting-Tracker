import API from "./axios";

export const extractActions = async (transcript) => {
  const res = await API.post("/transcripts", transcript, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
  return res.data;
};


export const getActions = async () => {
  const res = await API.get("/actions");
  return res.data;
};

export const addAction = async (action) => {
  const res = await API.post("/actions", action);
  return res.data;
};

export const toggleAction = async (id, done) => {
  await API.put(`/actions/${id}`, { done });
};

export const deleteAction = async (id) => {
  await API.delete(`/actions/${id}`);
};

export const getHealth = async () => {
  const res = await API.get("/health");
  return res.data;
};

export const getTranscripts = async () => {
  const res = await API.get("/transcripts");
  return res.data;
};
