import React from "react";
import PaginateLinks from "./PaginateLinks";
import PropTypes from "prop-types";
import usePaginationParams from "../../hooks/usePaginationParams";
import NextPageButton from "./NextPageButton";
import PrevPageButton from "./PrevPageButton";

/**
 * Component for rendering pagination navigation with previous and next page buttons.
 * @param {object} data - Pagination data containing last_page and links.
 * @param {function} onChangeHandler - Handler function called on page change.
 * @param {boolean} pageNumberAppendToUrl - Flag to append page number to URL.
 * @param {string} paginationClass - CSS class for pagination container.
 * @param {number} activePage - Active page number.
 * @returns {JSX.Element} - Pagination navigation UI.
 */
export default function PaginateNav({
  data,
  onChangeHandler,
  pageNumberAppendToUrl = true,
  paginationClass = "pagination flex-wrap gap-2 gap-md-0",
  activePage = null,
  ...rest
}) {
  const { pageNumber, pageNumberChange } = usePaginationParams(activePage);

  /**
   * Handler for clicking on pagination links.
   * @param {number} page - Page number clicked.
   */
  const paginateLinkClickHandler = (page) => {
    try {
      onChangeHandler(page);
      pageNumberChange(page, pageNumberAppendToUrl);
    } catch (e) {
      console.error("Failed to call onChangeHandler: " + e);
    }
  };

  // Slice links to exclude first and last elements (typically 'previous' and 'next')
  const links = data.links.slice(1, data.links.length - 1);

  return (
    <ul className={paginationClass}>
      <PrevPageButton
        pageNumber={parseInt(pageNumber)}
        paginateLinkClickHandler={paginateLinkClickHandler}
        {...rest}
      />
      <PaginateLinks
        pageNumber={parseInt(pageNumber)}
        paginateLinkClickHandler={paginateLinkClickHandler}
        links={links}
        {...rest}
      />
      <NextPageButton
        pageNumber={parseInt(pageNumber)}
        paginateLinkClickHandler={paginateLinkClickHandler}
        lastPage={data.last_page}
        {...rest}
      />
    </ul>
  );
}

PaginateNav.propTypes = {
  data: PropTypes.shape({
    last_page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    links: PropTypes.array.isRequired,
  }).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  pageNumberAppendToUrl: PropTypes.bool,
  paginationClass: PropTypes.string,
  activePage: PropTypes.number,
};
