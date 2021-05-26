import React, { useState } from "react";
import { Modal } from "../modal";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import "./footer.scss";

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const mainClassName = "footer";
  const openModalButtonClass = `${mainClassName}__open-modal-button`;
  const socialIconsWrapperClass = `${mainClassName}__social-icons-wrapper`;
  const iconContainerClass = `${mainClassName}__icon-container`;
  const copyrightClass = `${mainClassName}__copyright`;
  const today = new Date();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={mainClassName}>
      <button className={openModalButtonClass} onClick={openModal}>
        Contact
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className={socialIconsWrapperClass}>
        <a href="https://www.instagram.com/adele.urban/" target="blank">
          <div className={iconContainerClass}>
            <InstagramIcon />
          </div>
        </a>
      </div>
      <span className={copyrightClass}>
        &copy; {today.getFullYear()}, Adele Urbanaviciute
      </span>
    </div>
  );
};
