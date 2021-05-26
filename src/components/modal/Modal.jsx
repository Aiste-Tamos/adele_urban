import React, { useState, useRef, useCallback, useEffect } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { FormContent } from "./FormContent";
import PropTypes from "prop-types";
// import FormContent from "../FormContent";

import "./modal.scss";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const [resultText, setResultText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const modalClass = "modal";
  const contentClass = `${modalClass}__content`;
  const closeButtonClass = `${modalClass}__close-button`;

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const sendEmail = (e) => {
    e.preventDefault();
    init("user_cLmxbZr6uhdMHNMPHf1Ai");

    emailjs
      .sendForm(
        "service_jm3pebg",
        "template_lv5ambl",
        e.target,
        "user_cLmxbZr6uhdMHNMPHf1Ai"
      )
      .then(
        (result) => {
          setResultText("Sent!");
          setIsDisabled(true);
        },
        (error) => {
          setResultText("Something went wrong, please try again!");
        }
      );
  };

  return showModal ? (
    <div
      className={modalClass}
      ref={modalRef}
      onClick={closeModal}
      aria-hidden={true}
    >
      <div className={contentClass}>
        <FormContent
          sendEmail={sendEmail}
          resultText={resultText}
          isDisabled={isDisabled}
        />
        <button
          className={closeButtonClass}
          aria-label="Close form"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  showModal: PropTypes.any,
  setShowModal: PropTypes.any,
};
