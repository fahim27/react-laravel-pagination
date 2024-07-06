import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 * Component for rendering a next page button in pagination.
 * @param {string | element} nextBtnText - Text or element for the next button.
 * @param {function} paginateLinkClickHandler - Handler function for clicking on pagination links.
 * @param {string | number} pageNumber - Current page number.
 * @param {string | number} lastPage - Last page number.
 * @returns {JSX.Element} - Next page button UI.
 */
export default function NextPageButton({
  nextBtnText = ">",
  paginateLinkClickHandler,
  pageNumber,
  lastPage,
}) {
  /**
   * Handler for clicking on the next page button.
   * It calls paginateLinkClickHandler with the next page number if not on the last page.
   */
  const nextPageClickHandler = () => {
    if (parseInt(pageNumber) === parseInt(lastPage)) return;
    paginateLinkClickHandler(parseInt(pageNumber) + 1);
  };

  // Add 'disabled' class if on the last page
  const disabledClass =
    parseInt(pageNumber) === parseInt(lastPage) ? "disabled" : "";

  return (
    <li className={`page-item ${disabledClass}`} onClick={nextPageClickHandler}>
      <span className={`page-link cursor-pointer ${disabledClass}`}>
        {nextBtnText}
      </span>
    </li>
  );
}

NextPageButton.propTypes = {
  nextBtnText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  pageNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  lastPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  paginateLinkClickHandler: PropTypes.func.isRequired,
};
