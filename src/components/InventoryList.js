import { PropTypes } from "prop-types";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import InventoryItem from "./InventoryItem";

const InventoryList = ({ inventoryList }) => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2>Inventory</h2>
      <a
        href="#"
        className="link-secondary"
        data-bs-toggle="modal"
        data-bs-target="#inventoryListModal"
      >
        <BsPlusCircle className="fs-4" />
      </a>
    </div>
    {inventoryList &&
      inventoryList.map((item, idx) => <InventoryItem key={idx} {...item} />)}
  </div>
);

InventoryList.propTypes = {
  inventoryList: PropTypes.arrayOf(
    PropTypes.exact({
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      location: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string,
    })
  ),
};

export default InventoryList;
