import React from 'react';

const InfoBlock = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Title 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae tortor eu justo bibendum semper.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Title 2</h5>
              <p className="card-text">
                Fusce dignissim justo vel erat vehicula, vel feugiat ligula interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
