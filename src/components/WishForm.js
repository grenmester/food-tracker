import { PropTypes } from "prop-types";
import React, { useState } from "react";

const WishForm = ({ addWishItem }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [person, setPerson] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addWishItem({
      id: Math.random(),
      title,
      quantity: quantity && parseInt(quantity) > 0 ? parseInt(quantity) : 0,
      location,
      tags: tags ? tags.split(" ") : [],
      person,
      image: "",
    });

    setTitle("");
    setQuantity(0);
    setLocation("");
    setTags("");
    setPerson("");
  };

  return (
    <div
      className="modal fade"
      id="wishListModal"
      tabIndex="-1"
      aria-labelledby="wishListModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="wishListModalLabel">
              Add Item to Wish List
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="wish-form" onSubmit={handleSubmit}>
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
                  type="text"
                  className="form-control"
                  id="person"
                  onChange={(e) => setPerson(e.target.value)}
                  value={person}
                />
                <label htmlFor="person">Person</label>
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
            <button type="submit" form="wish-form" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

WishForm.propTypes = {
  addWishItem: PropTypes.func,
};

export default WishForm;
