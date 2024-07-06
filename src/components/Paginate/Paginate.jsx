import React from "react";
import PaginateCount from "./PaginateCount";
import PaginateNav from "./PaginateNav";
import PropTypes from "prop-types";

/**
 * Pagination component that combines PaginateCount and PaginateNav components.
 * @param {boolean} showingCount - Flag to display item count.
 * @param {...rest} props - Props passed down to PaginateCount and PaginateNav components.
 * @returns {JSX.Element} - Combined pagination UI.
 */

export default function Paginate({ showingCount = true, ...rest }) {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between">
      {showingCount && <PaginateCount {...rest} />}
      <PaginateNav {...rest} />
    </div>
  );
}

Paginate.propTypes = {
  showingCount: PropTypes.bool,
};
