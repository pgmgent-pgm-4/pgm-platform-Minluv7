import React from 'react';
import { ThemedPanel } from '../component/theme-switts';
import { Training } from '../component/training';
import { useThemeContext } from '../context/theme.context';
import { SocialMedia } from '../component/social';

function OpleidingPage() {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <h1>Opleiding</h1>
      <ThemedPanel />
      <div className="container">
        <Training />
      </div>
      <SocialMedia />
    </div>
  );
}

export default OpleidingPage;
