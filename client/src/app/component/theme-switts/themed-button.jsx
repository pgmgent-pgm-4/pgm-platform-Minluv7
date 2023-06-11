/* eslint-disable no-plusplus */
import React, { useRef } from 'react';
import { useThemeContext } from '../../context/theme.context';

function ThemedButton() {
  const myRef = useRef(0);

  const { isDarkMode } = useThemeContext();
  const handleClick = () => {
    myRef.current++;
  };

  return (
    <button onClick={handleClick} type="button" className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}>Button</button>
  );
}

export default ThemedButton;
