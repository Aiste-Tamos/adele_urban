import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import "./artworkSection.scss";

export const ArtworkSection = () => {
  const mainClass = "art-section";
  const wrapperClass = `${mainClass}__wrapper`;
  const imageWrapperClass = `${mainClass}__image-wrapper`;
  const imageClass = `${mainClass}__image`;

  return (
    <section className={mainClass}>
      <div className={wrapperClass}>
        <div className={imageWrapperClass}>
          <Link to="/paintings">
            <img
              className={imageClass}
              src="https://art.kunstmatrix.com/en/system/files/styles/large/private/art/6962/untitled-1.jpg?itok=ru5FQnAD"
              alt=""
            />
          </Link>
        </div>
        <div className={imageWrapperClass}>
          <Link to="https://aiste-tamos.github.io/adele_urban/#/paintings">
            <img
              className={imageClass}
              src="https://www.paveikslai.lt/67136-large_default/baimes.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
