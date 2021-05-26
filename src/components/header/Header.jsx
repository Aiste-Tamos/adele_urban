import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Modal } from "../modal";
import "./header.scss";

export const Header = ({ className, ...other }) => {
  const [isActive, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const mainClassName = "header";
  const headerClass = classNames(mainClassName, className);
  const topWrapperClass = `${mainClassName}__top-wrapper`;
  const titleClass = `${mainClassName}__title`;
  const menuButtonClass = `${mainClassName}__menu-button`;
  const menuButtonChangedClass = `${mainClassName}__menu-button--changed`;
  const navWrapperClass = `${mainClassName}__nav-wrapper`;
  const navClass = `${mainClassName}__nav`;
  const navItemClass = `${mainClassName}__nav-item`;
  const navLinkClass = `${mainClassName}__nav-link`;
  const navButtonClass = `${mainClassName}__nav-button`;

  const handleMenuButtonPress = (e) => {
    if (e.key === "Enter") {
      toggleClass();
    }
  };

  const toggleClass = () => {
    setActive(!isActive);
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={headerClass} {...other}>
      <div className={topWrapperClass}>
        <div className={titleClass}>Adele Urban</div>
        <div
          className={isActive ? menuButtonChangedClass : menuButtonClass}
          onClick={toggleClass}
          onKeyPress={handleMenuButtonPress}
          role="button"
          tabIndex="0"
        >
          <div className={`${mainClassName}__bar1`}></div>
          <div className={`${mainClassName}__bar2`}></div>
          <div className={`${mainClassName}__bar3`}></div>
        </div>
      </div>
      <nav
        className={
          isActive ? navWrapperClass : `${navWrapperClass}--horizontal`
        }
      >
        <ul className={navClass}>
          <li className={navItemClass}>
            <a className={navLinkClass} href="#paintings">
              Paintings
            </a>
          </li>
          <li className={navItemClass}>
            <Link to="/exhibitions" className={navLinkClass}>
              Exhibitions
            </Link>
          </li>
          <li className={navItemClass}>
            <button className={navButtonClass} onClick={openModal}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: "",
};
