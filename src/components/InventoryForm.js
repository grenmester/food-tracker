import React from "react";

const InventoryForm = () => (
  <div
    className="modal fade"
    id="inventoryListModal"
    tabIndex="-1"
    aria-labelledby="inventoryListModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="inventoryListModalLabel">
            Add Item to Inventory
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="title" required />
              <label htmlFor="title">Food Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="quantity" />
              <label htmlFor="quantity">Quantity</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="location" />
              <label htmlFor="location">Storage Location</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="tags" />
              <label htmlFor="tags">Tags</label>
            </div>
            <div className="form-floating mb-3">
              <input type="date" className="form-control" id="date" />
              <label htmlFor="date">Expiration Date</label>
            </div>
            <input className="form-control" type="file" id="image" />
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default InventoryForm;
