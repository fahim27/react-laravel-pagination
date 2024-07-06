import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 * Component for rendering a single pagination link.
 * @param {function} paginateLinkClickHandler - Handler function for clicking on pagination links.
 * @param {object} link - Object representing the pagination link.
 * @param {number} pageNumber - Current page number.
 * @param {string} paginateItemClass - CSS class for the pagination item.
 * @param {string} paginateLinkClass - CSS class for the pagination link.
 * @returns {JSX.Element} - Pagination link UI.
 */
export default function PaginateLink({
  paginateLinkClickHandler,
  link,
  pageNumber,
  paginateItemClass = "page-item",
  paginateLinkClass = "page-link cursor-pointer",
}) {

  const pageLabel     = parseInt(link.label);
  const disabledClass = isNaN(pageLabel) ? "disabled" : "";
  const activeClass   = pageNumber === pageLabel ? "active" : "";

  return (
    <li
      className={`${paginateItemClass} ${disabledClass}`}
      onClick={() => paginateLinkClickHandler(pageLabel)}
    >
      <span className={`${paginateLinkClass} ${activeClass} ${disabledClass}`}>
        {link.label}
      </span>
    </li>
  );
}

PaginateLink.propTypes = {
  link: PropTypes.object.isRequired,
  pageNumber: PropTypes.number.isRequired,
  paginateLinkClickHandler: PropTypes.func.isRequired,
  paginateItemClass: PropTypes.string,
  paginateLinkClass: PropTypes.string,
};
