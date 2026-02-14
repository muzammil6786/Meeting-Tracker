import { useEffect, useState } from "react";
import { getTranscripts } from "../api";

export default function TranscriptHistory({ refresh }) {
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

  const pageSize = 5;

  useEffect(() => {
    loadHistory();
  }, [refresh]);

  const loadHistory = async () => {
    const data = await getTranscripts();
    setHistory(data || []);
  };

  // Pagination
  const totalPages = Math.ceil(history.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedHistory = history.slice(startIndex, startIndex + pageSize);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="history">
      <h3>Transcript History</h3>

      {paginatedHistory.length === 0 ? (
        <p>No transcripts yet</p>
      ) : (
        paginatedHistory.map((t) => {
          const isExpanded = expandedId === t.id;
          const preview =
            t.text.length > 120 ? t.text.substring(0, 120) + "..." : t.text;

          return (
            <div key={t.id} className="history-item">
              <div className="history-text">
                {isExpanded ? t.text : preview}
              </div>

              {t.text.length > 120 && (
                <button
                  className="view-more"
                  onClick={() => toggleExpand(t.id)}
                >
                  {isExpanded ? "Show Less" : "View More"}
                </button>
              )}
            </div>
          );
        })
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
