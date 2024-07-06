import React from "react";
import PropTypes from "prop-types";
import PaginateLink from "./PaginateLink";

/**
 * Component for rendering pagination links.
 * @param {array} links - Array of pagination links.
 * @param {...rest} props - Props passed down to PaginateLink component.
 * @returns {JSX.Element} - Pagination links UI.
 */
export default function PaginateLinks({ links, ...rest }) {
  return (
    <>
      {links.map((link, index) => (
        <PaginateLink link={link} key={index} {...rest} />
      ))}
    </>
  );
}

PaginateLinks.propTypes = {
  links: PropTypes.array.isRequired,
};
