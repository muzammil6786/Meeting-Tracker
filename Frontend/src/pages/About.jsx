export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Meeting Tracker</h1>

        <p className="about-text">
          Meeting Tracker is an AI-powered productivity tool that transforms
          meeting conversations into clear, actionable tasks. Paste your meeting
          transcript and our AI automatically extracts key action items so your
          team can stay organized and accountable.
        </p>

        <p className="about-text">
          Instead of manually noting follow-ups, the system identifies tasks,
          helps you track their progress, and keeps your workflow efficient.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-box">
          <h3>🤖 AI Extraction</h3>
          <p>Automatically identifies action items from meeting transcripts.</p>
        </div>

        <div className="feature-box">
          <h3>📋 Task Tracking</h3>
          <p>Manage tasks with Open and Completed status.</p>
        </div>

        <div className="feature-box">
          <h3>🕒 History</h3>
          <p>View past transcripts and extracted actions anytime.</p>
        </div>

        <div className="feature-box">
          <h3>⚡ Simple UI</h3>
          <p>Clean, fast and distraction-free interface.</p>
        </div>
      </div>
    </div>
  );
}
