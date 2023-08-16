import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPrint, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import ProductPopup from './AddPopup';
import MissingPopup from './MissingItemPopup';
import ProductPriceUpdatePopup from './ProductPriceUpdatePopup';
import './Style.css';

const ProductOrderList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupOpens, setPopupOpens] = useState(false);
  const [productPopupOpens, setProductPopupOpens] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openPopups = () => {
    setPopupOpens(true);
  };

  const closePopups = () => {
    setPopupOpens(false);
  };

  const openProductPopup = () => {
    setProductPopupOpens(true);
  };

  const closeProductPopup = () => {
    setProductPopupOpens(false);
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
    {
      id: 2,
      image: 'product2.jpg',
      productName: 'Blue Shirt',
      brand: 'Adidas',
      price: 39.95,
      quantity: 3,
      status: 'Pending',
      total: 119.85,
    },
    {
      id: 3,
      image: 'product3.jpg',
      productName: 'Black Jeans',
      brand: 'Levi\'s',
      price: 64.50,
      quantity: 2,
      status: 'Delivered',
      total: 129.00,
    },
    // Add more products as needed
  ];

  const filteredProducts = productList.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mt-4 tb border p-4">
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
          {/* <button className="btn btn-primary" onClick={openPopup}>Add Item</button> */}
          <ProductPopup isOpen={popupOpen} onClose={closePopup} />
          <FontAwesomeIcon icon={faPrint} className="ms-2 icon-custom-color " />

        </div>
      </div>
      <table className="table ">
        <thead className="table-rounded-header">
          <tr className="table-rw">
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
            <tr key={product.id} className="table-row-bottom">
              <td>
                <img
                  src={product.image}
                  alt={product.productName}
                  className="img-thumbnail"
                  style={{ maxWidth: '100px' }}
                />
              </td>
              <td>{product.productName}</td>
              <td>{product.brand}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>${product.total.toFixed(2)}</td>
              <td>{product.status}</td>
              <td>
                <FontAwesomeIcon icon={faCheck} style={{ marginRight: '10px', color: 'green' }} />

                <MissingPopup isOpen={popupOpens} onClose={closePopups} />
                {/* <button className=" btn boarder me-2">Edit</button> */}
                <ProductPriceUpdatePopup isOpen={openProductPopup} onClose={closeProductPopup} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductOrderList;
