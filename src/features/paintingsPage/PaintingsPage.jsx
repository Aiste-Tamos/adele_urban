import React from "react";
import PropTypes from "prop-types";

import "./paintingsPage.scss";

export const PaintingsPage = ({ className, ...other }) => {
  const mainClassName = "paintings";
  const topWrapperClass = `${mainClassName}__top-wrapper`;
  const buttonClass = `${mainClassName}__button`;
  const paintingClass = `${mainClassName}__painting`;
  const paintingTitleClass = `${mainClassName}__painting-title`;
  const paintingInfoClass = `${mainClassName}__painting-info`;
  const imageWrapperClass = `${mainClassName}__image-wrapper`;
  const imageClass = `${mainClassName}__image`;

  return (
    <div className={mainClassName} {...other}>
      <div className={topWrapperClass}>
        <a className={buttonClass} href="/">adele urban</a>
      </div>
      <div className={paintingClass}>
        <div className={imageWrapperClass}>
          <img
            className={imageClass}
            src="https://art.kunstmatrix.com/en/system/files/styles/large/private/art/6962/untitled-1.jpg?itok=ru5FQnAD"
            alt=""
          />
          <h2 className={paintingTitleClass}>Girl on a scooter</h2>
        </div>
        <h3 className={paintingInfoClass}>70x100. Oil <br></br>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          necessitatibus. Facere laudantium magni libero nam.
        </h3>
      </div>
      <div className={paintingClass}>
        <div className={imageWrapperClass}>
          <img
            className={imageClass}
            src="https://www.paveikslai.lt/67136-large_default/baimes.jpg"
            alt=""
          />
          <h2 className={paintingTitleClass}>Fears</h2>
        </div>
        <h3 className={paintingInfoClass}>150x150. Oil, acryl <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est nam nobis natus accusantium id!
        </h3>
        </div>
    </div>
  );
};

PaintingsPage.propTypes = {
  className: PropTypes.string,
};

PaintingsPage.defaultProps = {
  className: "",
};
