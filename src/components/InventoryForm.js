import { PropTypes } from "prop-types";
import React, { useState } from "react";

const InventoryForm = ({ addInventoryItem }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addInventoryItem({
      title,
      quantity: quantity && parseInt(quantity) > 0 ? parseInt(quantity) : 0,
      location,
      tags: tags ? tags.split(" ") : [],
      date,
      image: "",
    });

    setTitle("");
    setQuantity(0);
    setLocation("");
    setTags("");
    setDate("");
  };

  return (
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
            <form id="inventory-form" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
                <label htmlFor="title">Food Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
                <label htmlFor="quantity">Quantity</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
                <label htmlFor="location">Storage Location</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  onChange={(e) => setTags(e.target.value)}
                  value={tags}
                />
                <label htmlFor="tags">Tags</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                />
                <label htmlFor="date">Expiration Date</label>
              </div>
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
            <button
              type="submit"
              form="inventory-form"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

InventoryForm.propTypes = {
  addInventoryItem: PropTypes.func,
};

export default InventoryForm;
