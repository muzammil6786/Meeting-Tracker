import { useState } from "react";
import { toggleAction, deleteAction } from "../api";

export default function ActionList({ actions, reload }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("open"); // open | done | all
  const pageSize = 5;

  if (!actions || actions.length === 0) return <p>No actions yet</p>;

  // Filter logic
  let filteredActions = actions;

  if (filter === "open") {
    filteredActions = actions.filter(a => !a.done);
  } else if (filter === "done") {
    filteredActions = actions.filter(a => a.done);
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredActions.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedActions = filteredActions.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const handleFilterChange = (type) => {
    setFilter(type);
    setCurrentPage(1); // reset to first page when filter changes
  };

  return (
    <div className="list">
      <h3>Actions</h3>

      {/* Filters */}
      <div className="filters">
        <button
          className={filter === "open" ? "active" : ""}
          onClick={() => handleFilterChange("open")}
        >
          Open
        </button>
        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => handleFilterChange("done")}
        >
          Done
        </button>
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
      </div>

      {/* List */}
      {paginatedActions.length === 0 ? (
        <p>No actions found</p>
      ) : (
        paginatedActions.map(a => (
          <div key={a.id} className="item">
            <input
              type="checkbox"
              checked={a.done}
              onChange={() =>
                toggleAction(a.id, !a.done).then(reload)
              }
            />

            <span className={a.done ? "done" : ""}>
              {a.task} | {a.owner} | {a.dueDate}
            </span>

            <button
              onClick={() => deleteAction(a.id).then(reload)}
            >
              Delete
            </button>
          </div>
        ))
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
