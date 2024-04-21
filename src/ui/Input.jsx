"use client"
import React, { useEffect, useRef, useState } from 'react'
// import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
// import { ReactComponent as Open } from '../assets/icons/openedeays.svg';
// import { ReactComponent as Close } from '../assets/icons/closedeays.svg';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const Input = ({
  label,
  autoComplete,
  searchicon,
  value = "",
  onChange,
  id,
  width,
  placeholder,
  defaultValue,
  type,
  name,
  eays,
  disabled,
  props,
  required,
  searchHandle,
  error,
  height,
  border,
  less,
  className,
  min, max,
  errorTitle
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const textFieldRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!disabled && textFieldRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [disabled, textFieldRef]);


  const tabEnter = (e) => {
    if (e.key === 'Enter' && searchicon) {
      searchHandle()
    }
  }

  return (
    <Div width={width} eays={eays}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <label htmlFor={id} className={className === "notranslate" ? "notranslate" : ''}>
          {label}
          {required && <span className="required"> *</span>}
        </label>
        {error && <Typography sx={{color: 'red !important', fontSize: '12px !important'}}>{errorTitle}</Typography>}
      </Box>
      <div className="wrapicon">
        {searchicon && <SearchIcon onClick={searchHandle} />}
        <StyledInput
          min={min}
          max={max}
          border={border}
          // sx={{ border: border ? `1px solid ${border || "#00e676"}` : "" }}
          searchicon={searchicon}
          height={height}
          error={error}
          placeholder={placeholder}
          value={value || defaultValue}
          onChange={onChange}
          id={id}
          disabled={disabled}
          type={type || isOpen ? (type || "text") : 'password'}
          name={name}
          onKeyDown={tabEnter}
          defaultValue={defaultValue}
          less={less}
          {...props}
          className={className}
          readOnly={value === null && !defaultValue}
          ref={textFieldRef}
          autoComplete={autoComplete}
        />
        {eays &&
          (isOpen ? (
            <Open onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <Close onClick={() => setIsOpen(!isOpen)} />
          ))}
      </div>
    </Div>
  )
}

export default Input;

const Div = styled("div")`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  & .wrapicon {
    display: flex;
    align-items: center;
    position: relative;
  }
  & .required {
    color: red;
    font-weight: 500;
  }
  & > label {
    color: rgba(52, 64, 84, 1);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  & >div> svg {
    /* position: absolute; */
    position: ${(props) => props.eays ? "absolute" : "relative"};
    left: ${(props) => props.eays ? "" : "35px"};
    right: ${(props) => props.eays ? "0" : ""};
  }
  label {
    font-size: 14px;
    color: rgba(52, 64, 84, 1);
  }
  input[type="date" i]::-webkit-calendar-picker-indicator {
    width: 15px;
    height: 15px;
    margin-right: 5px !important;
  }
`;

const StyledInput = styled("input")`
  background: white;
  height: ${(props) => (props.height ? props.height : "36px")};
  border: ${(props) => (props.error ? "1px solid red" : "1px solid rgba(208, 213, 221, 1)")};
  border-color:${(props) => (props.border ? props.border : "")};
  width: 100%;
  outline: none;
  padding:${(props) => (props.searchicon ? "0px 0 0 40px" : "0px 0 0 10px")};
  margin-top:${(props) => (props.searchicon ? "0" : "4px")};
  border-radius: 5px;
  color: ${(props) => (props.less ? "red" : "initial")};
  &:focus {
    border: ${(props) => (props.error ? "1px solid red" : "1px solid #495ba4")};
    /* border: 1px solid #24A758; */
  }
  &::placeholder {
    font-weight: 300;
    font-size: 14px;
  }
  &::-webkit-outer-spin-button,
   ::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
`;