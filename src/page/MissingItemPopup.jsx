import React from 'react';
import Popup from 'reactjs-popup';
import './MissingItemPopup.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MissingItemPopup = () => {
  return (
    <Popup
      className="popup-container"
      trigger={<FontAwesomeIcon icon={faTimes} style={{ marginRight: '10px', color: 'red' }} />}
      modal
      nested
    >
      {(close) => (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Missing Product</h3>
              <FontAwesomeIcon icon={faTimes} onClick={close} className="close-icon" />
            </div>
            <div className="popup-message">
              This is a warning message. Item is not available.
            </div>
            <div className="popup-footer">
              <button onClick={close}>OK</button>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default MissingItemPopup;
