import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPrint } from '@fortawesome/free-solid-svg-icons';
import './Button.css';

const AddPopup = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const productList = [
    {
        id: 1,
        image: 'product1.jpg',
        productName: 'Red Shoes',
        brand: 'Nike',
        price: 79.99,
        quantity: 1,
        status: 'Shipped',
        total: 79.99,
      },
  ];

  const filteredProducts = productList.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEditPrice = (productId, newPrice) => {
    // Update the price of the product with the given ID
    // You can implement this function as needed
  };

  const handleEditQuantity = (productId, newQuantity) => {
    // Update the quantity of the product with the given ID
    // You can implement this function as needed
  };

  return (
    <Popup
      className="popup-container"
      trigger={<button className="btns btn ">Add Item</button>}
      modal
      nested
    >
      <div className="container mt-4 border bg-white shadow p-4">
        <div className="row mb-3">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Product..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="col-md-6 text-end">
         <button className="btns btn ">Add Item</button>
          {/* <ProductPopup isOpen={popupOpen} onClose={closePopup} /> */}
          {/* <FontAwesomeIcon icon={faPrint} className="ms-2" /> */}

        </div>
        </div>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>
                  {/* Image */}
                </td>
                <td>{product.productName}</td>
                <td>{product.brand}</td>
                <td>
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => handleEditPrice(product.id, parseFloat(e.target.value))}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleEditQuantity(product.id, parseInt(e.target.value))}
                    className="form-control"
                  />
                </td>
                <td>${product.total.toFixed(2)}</td>
                <td>{product.status}</td>
                <td>
                  {/* Edit and Cancel buttons */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Popup>
  );
};

export default AddPopup;
