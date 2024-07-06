import { useEffect, useState } from "react";

/**
 * Custom hook for managing pagination parameters, including page number and URL state.
 * @param {number} defaultPage - Default page number to initialize with.
 * @returns {object} - Object containing functions and state for pagination management.
 */
export default function usePaginationParams(defaultPage = null) {
  /**
   * Function to retrieve page number from URL query parameters.
   * @returns {string | null} - Page number retrieved from URL, or 1.
   */
  const getPageNumber = () => {
    if (defaultPage) return defaultPage;
    const url = new URL(window.location.href);
    const params = url.searchParams;
    return params.get("page") || 1;
  };

  const [pageNumber, setPageNumber] = useState(getPageNumber);

  useEffect(() => {
    setPageNumber(getPageNumber());
  }, []);

  /**
   * Function to update the URL with the current page number.
   * @param {number} page - Page number to set in the URL.
   */
  const setPageNumberToUrl = (page) => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    if (parseInt(page) > 1) {
      params.set("page", page);
    } else {
      params.delete("page");
    }
    history.replaceState(null, "", url);
    setPageNumber(page);
  };

  /**
   * Function to handle page number change.
   * @param {number} page - New page number.
   * @param {boolean} pageNumberAppendToUrl - Flag to control whether to append page number to URL.
   */
  const pageNumberChange = (page, pageNumberAppendToUrl = true) => {
    setPageNumber(page);
    if (pageNumberAppendToUrl) {
      setPageNumberToUrl(page);
    }
  };

  return { pageNumberChange, pageNumber };
}
