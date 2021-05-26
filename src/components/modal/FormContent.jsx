import React from "react";
import PropTypes from "prop-types";
import { InputField } from "./InputField";

import "./formContent.scss";

export const FormContent = ({ sendEmail, resultText, isDisabled }) => {
  const mainClass = "form-content";
  const formClass = `${mainClass}__form`;
  const inputClass = `${mainClass}__input`;
  const messageWrapperClass = `${mainClass}__message-wrapper`;
  const messageClass = `${mainClass}__message`;
  const messageLabelClass = `${mainClass}__message-label`;
  const submitButton = `${mainClass}__submit-button`;

  return (
    <div className={mainClass}>
      <form className={formClass} onSubmit={sendEmail}>
        <InputField
          id="name"
          name="name"
          label="Name"
          type="text"
          placeholder="Your full name..."
          className={inputClass}
          autoComplete="true"
          required
          // isWithError={nameIsError}
          // errorMessage={nameErrMsg}
          // value={nameValue}
          // onChange={handleNameChange}
          // onBlur={handleNameOnBlur}
        />
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="Your email..."
          className={inputClass}
          autoComplete="true"
          required
          // isWithError={emailIsError}
          // errorMessage={emailErrMsg}
          // value={emailValue}
          // onChange={handleEmailChange}
          // onBlur={handleEmailOnBlur}
        />
        <InputField
          id="phone"
          name="phone"
          label="Phone number"
          type="tel"
          placeholder="Your phone number..."
          className={inputClass}
          autoComplete="true"
          required
          // isWithError={phoneIsError}
          // errorMessage={phoneErrMsg}
          // value={phoneValue}
          // onChange={handlePhoneChange}
          // onBlur={handlePhoneOnBlur}
        />
        <div className={messageWrapperClass}>
          <label className={messageLabelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="Message"
            name="Message"
            label="Message"
            type="text"
            placeholder="Message..."
            className={messageClass}
            required
            // value={messageValue}
            // onChange={handleMessageChange}
            // onBlur={handleMessageOnBlur}
          />
        </div>
        <button type="submit" className={submitButton} disabled={isDisabled}>
          Send
        </button>
        {resultText}
      </form>
    </div>
  );
};

FormContent.propTypes = {
  isDisabled: PropTypes.bool,
  resultText: PropTypes.string,
  sendEmail: PropTypes.func,
};

FormContent.defaultProps = {
  isDisabled: false,
  resultText: "",
  sendEmail: null,
};
