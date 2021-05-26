import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as ClearIcon } from "../../assets/icons/close.svg";

import "./inputField.scss";

export const InputField = ({ 
  id,
  name,
  label,
  type,
  placeholder,
  isWithError,
  defaultValue,
  required,
  errorMessage,
  autoComplete,
  className,
  onClearInput,
  ...other 
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  
  const mainClass = "input-field";
  const wrapperClass = classNames(
    `${mainClass}__wrapper`,
    {
      [`${mainClass}__wrapper--error`]: isWithError,
    },
    className
    );
  const labelClass = `${mainClass}__label`;
  const clearButtonClass = `${mainClass}__clear-button`;
  const errorMessageClass = `${mainClass}__error-message`;
  const controlsWrapperClass = `${mainClass}__controls-wrapper`;

    const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    
    const clearInput = () => {
        setInputValue("");
      };

    const handleClearInput = onClearInput || clearInput;

    return (
        <div className={wrapperClass}>
          <label className={labelClass} htmlFor={id}>
            {label}
          </label>
          <div className={controlsWrapperClass}>
            <input
              className={mainClass}
              type={type}
              id={id}
              name={name}
              aria-required={required}
              placeholder={placeholder}
              autoComplete={autoComplete}
              value={inputValue}
              onChange={handleChange}
              required={required}
              {...other}
            />
            {isWithError && (
              <button className={clearButtonClass} onClick={handleClearInput}>
                <ClearIcon />
              </button>
            )}
        </div>
        {isWithError && <span className={errorMessageClass}>{errorMessage}</span>}
    </div>
    );
};

InputField.propTypes = {
    isWithError: PropTypes.bool,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    required: PropTypes.bool,
    errorMessage: PropTypes.string,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    onClearInput: PropTypes.func,
  };
  
  InputField.defaultProps = {
    isWithError: false,
    placeholder: "",
    type: "text",
    defaultValue: "",
    required: false,
    errorMessage: "",
    autoComplete: "off",
    className: "",
    onClearInput: undefined,
  };
  
