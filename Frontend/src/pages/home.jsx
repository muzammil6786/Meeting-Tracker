import { useEffect, useState } from "react";
import { extractActions, getActions, addAction } from "../api";
import ActionList from "../components/ActionList";
import TranscriptHistory from "../components/TranscriptHistory";

export default function Home() {
  const [text, setText] = useState("");
  const [actions, setActions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const load = () => getActions().then(setActions);

  useEffect(() => {
    load();
  }, []);

  const handleExtract = async () => {
    if (!text.trim()) {
      alert("Please enter transcript");
      return;
    }

    setLoading(true);

    try {
      const items = await extractActions(text);

      if (Array.isArray(items)) {
        for (let item of items) {
          await addAction(item);
        }
      }

      setText("");
      load();
    } catch {
      alert("Extraction failed");
    }

    setLoading(false);
  };

  const filtered = actions.filter((a) => {
    if (filter === "open") return !a.done;
    if (filter === "done") return a.done;
    return true;
  });

  return (
    <div>
      <div className="hero">
  <div className="hero-text">
    <h1>Turn Meetings into Action — Instantly with Meeting Tracker AI</h1>
    <p>
      Paste your meeting transcript below. Our AI analyzes the conversation
      and automatically identifies key action items, helping you turn
      discussions into clear, trackable tasks.
    </p>
  </div>

  <img
    src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
    alt="AI Assistant"
    className="hero-image"
  />
</div>

      <h1>Meeting Actions</h1>
      

      <textarea
        rows="5"
        placeholder="Paste meeting transcript..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleExtract} disabled={loading}>
        {loading ? "Extracting..." : "Extract Actions"}
      </button>

      <ActionList actions={filtered} reload={load} />

      <TranscriptHistory />
    </div>
  );
}
