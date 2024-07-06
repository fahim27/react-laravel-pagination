import React from "react";
import PropTypes from "prop-types";

/**
 * Component to display pagination count information.
 * @param {object} data - Object containing pagination data (from, to, total).
 * @param {string} showingText - Text to display before the range.
 * @param {string} ofText - Text to display between the range and the total.
 * @param {string} toText - Text to display after the range.
 * @param {string} resultText - Text to display after the total count.
 * @returns {JSX.Element} - Pagination count UI.
 */
export default function PaginateCount({
  data,
  showingText = "Showing",
  ofText = "of",
  toText = "to",
  resultText = "results",
}) {
  return (
    <div className="pagination-count">
      <p className="small text-muted">
        {showingText}
        <span className="fw-semibold mx-1">{data.from}</span>
        {toText}
        <span className="fw-semibold mx-1">{data.to}</span>
        {ofText}
        <span className="fw-semibold mx-1">{data.total}</span>
        {resultText}
      </p>
    </div>
  );
}

PaginateCount.propTypes = {
  data: PropTypes.shape({
    from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  showingText: PropTypes.string,
  ofText: PropTypes.string,
  toText: PropTypes.string,
  resultText: PropTypes.string,
};
