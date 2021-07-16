import PropTypes from "prop-types";
import React from "react";

const InventoryItem = ({
  id,
  image,
  title,
  quantity,
  location,
  tags,
  date,
  deleteInventoryItem,
}) => (
  <article className="d-flex py-2 border-bottom">
    <div>
      {image ? (
        <img
          src={image}
          alt={title}
          width="48"
          height="48"
          className="border rounded-circle mx-2"
        />
      ) : (
        <div
          className="d-flex justify-content-center align-items-center bg-secondary text-light fs-4 border rounded-circle mx-2"
          style={{ height: "48px", width: "48px" }}
        >
          {title[0]}
        </div>
      )}
    </div>
    <div className="d-flex flex-grow-1 flex-column flex-md-row align-items-md-center">
      <div className="d-flex align-items-center">
        <span className="fs-5 fw-bold mx-1">{title}</span>
        {!!quantity && (
          <div className="mx-1">
            <span className="badge rounded-pill bg-danger">x{quantity}</span>
          </div>
        )}
      </div>
      <div>
        {!!location && (
          <span className="text-muted fst-italic mx-1">{location}</span>
        )}
      </div>
      <div className="d-flex align-items-center ms-auto mt-2 mt-md-0">
        {tags &&
          tags.map((tag) => (
            <div className="mx-1" key={tag}>
              <span className="badge bg-success">{tag}</span>
            </div>
          ))}
        {!!date && <span className="mx-1">{date}</span>}
        <button
          type="button"
          className="btn-close mx-1"
          aria-label="Close"
          onClick={() => deleteInventoryItem(id)}
        />
      </div>
    </div>
  </article>
);

InventoryItem.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  deleteInventoryItem: PropTypes.func,
};

export default InventoryItem;
