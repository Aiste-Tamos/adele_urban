import React from "react";
import PropTypes from "prop-types";
import { ArtworkSection, Footer, Header, MainContent } from "../../components";

import "./mainLayout.scss";

export const MainLayout = ({ className, ...other }) => {
  const mainClassName = "main-layout";
  const headerClass = `${mainClassName}__header`;

  return (
    <div className={mainClassName} {...other}>
      <Header id="header" className={headerClass} />
      <MainContent />
      <ArtworkSection />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  className: PropTypes.string,
};

MainLayout.defaultProps = {
  className: "",
};
