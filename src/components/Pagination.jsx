import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Paginate from "./Paginate/Paginate";

/**
 * Pagination component that wraps Paginate component.
 * @param {...rest} props - Props passed down to Paginate component.
 * @returns {JSX.Element} - Paginate component with provided props.
 */
export default function Pagination({ ...rest }) {
  return <Paginate {...rest} />;
}
