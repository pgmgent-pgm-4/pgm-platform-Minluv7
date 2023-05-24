import React from 'react';
import { useThemeContext } from '../../context/theme.context';

// Styling
import './themed-panel.scss';

const ThemedPanel = () => {
  const { isDarkMode } = useThemeContext();

  return (

    <div className={`model ${isDarkMode ? 'modal-dark' : 'modal-light'}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ThemedPanel;