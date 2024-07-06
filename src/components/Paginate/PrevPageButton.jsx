import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 * Component for rendering a previous page button in pagination.
 * @param {string | element} previousBtnText - Text or element for the previous button.
 * @param {function} paginateLinkClickHandler - Handler function for clicking on pagination links.
 * @param {string | number} pageNumber - Current page number.
 * @returns {JSX.Element} - Previous page button UI.
 */
export default function PrevPageButton({
  previousBtnText = "<",
  paginateLinkClickHandler,
  pageNumber,
}) {
  /**
   * Handler for clicking on the previous page button.
   * It calls paginateLinkClickHandler with the previous page number if not on the first page.
   */
  const prevPageClickHandler = () => {
    if (pageNumber == 1) return;
    paginateLinkClickHandler(parseInt(pageNumber) - 1);
  };

  // Add 'disabled' class if on the first page
  const disabledClass = pageNumber === 1 ? "disabled" : "";

  return (
    <li className={`page-item ${disabledClass}`} onClick={prevPageClickHandler}>
      <span className={`page-link cursor-pointer ${disabledClass}`}>
        {previousBtnText}
      </span>
    </li>
  );
}

PrevPageButton.propTypes = {
  previousBtnText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  pageNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  paginateLinkClickHandler: PropTypes.func.isRequired,
};
