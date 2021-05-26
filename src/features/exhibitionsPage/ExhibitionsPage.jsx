import React from "react";
import PropTypes from "prop-types";

// import "./exhibitionsPage.scss";

export const ExhibitionsPage = ({ className, ...other }) => {
  const mainClassName = "exhibitions";

  return (
    <div className={mainClassName} {...other}>
      <h1>Hello this is exhibitions page</h1>
    </div>
  );
};

ExhibitionsPage.propTypes = {
  className: PropTypes.string,
};

ExhibitionsPage.defaultProps = {
  className: "",
};
