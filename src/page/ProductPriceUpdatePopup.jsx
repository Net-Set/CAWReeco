import React, { useState } from 'react';
import './ProductPriceUpdatePrice.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faL, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Style.css';
const ProductPriceUpdatePopup = () => {
  const [newPrice, setNewPrice] = useState(false);
  const [newQuantity, setNewQuantity] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setNewQuantity(event.target.value);
  };

  const handleSaveChanges = () => {
    // Here you can implement the logic to update the product's price and quantity
    console.log('New Price:', newPrice);
    console.log('New Quantity:', newQuantity);
    closePopup();
  };

  return (
    <div className="popup-container">
    <button className=" btn boarder me-2" onClick={openPopup}>Edit</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Update Price & Quantity</h3>
            <div className="product-info">
              <div className="product-image">
                <img   />
              </div>
              <div className="product-details">
                <p className="product-name">Product Name</p>
                <p className="product-brand">band Data</p>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                value={newPrice}
                onChange={handlePriceChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={newQuantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="button-group">
              <button className="cancel-button" onClick={closePopup}>
                <FontAwesomeIcon icon={faTimes} />
                Cancel
              </button>
              <button className="save-button" onClick={handleSaveChanges}>
                <FontAwesomeIcon icon={faCheck} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPriceUpdatePopup;
