import { useEffect, useState } from "react";
import { getHealth } from "../api";

export default function Status() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    getHealth().then(setStatus);
  }, []);

  return (
    <div>
      <h1>System Status</h1>
      <p>Backend: {status.backend}</p>
      <p>Database: {status.db}</p>
      <p>LLM: {status.llm}</p>
    </div>
  );
}
