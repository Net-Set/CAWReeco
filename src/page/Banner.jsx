import React from 'react';
import './Banner.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUnderline } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container row">
        <div className="order-container">
          <p>
            Orders <FontAwesomeIcon icon={faChevronRight} />{' '}
            <span style={{ textDecoration: 'underline' }}>order 30835jDI9j93</span>
          </p>
        </div>
        <div className="button-container">
          <h2>
            Orders 30835jDI9j93{' '}
            <span className="view-button " style={{alignItems:'right',width:'100%'}}>
              <button className="btnbb">Back</button>
            </span>
            <span className="view-button " style={{alignItems:'right',width:'100%'}}>
              <button className="btnsb">Approve Order</button>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
