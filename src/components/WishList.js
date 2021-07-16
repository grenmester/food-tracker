import { PropTypes } from "prop-types";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import WishItem from "./WishItem";

const WishList = ({ wishList, deleteWishItem }) => (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2>Wish List</h2>
      <a
        href="#"
        className="link-secondary"
        data-bs-toggle="modal"
        data-bs-target="#wishListModal"
      >
        <BsPlusCircle className="fs-4" />
      </a>
    </div>
    {wishList &&
      wishList.map((item) => (
        <WishItem key={item.id} {...item} deleteWishItem={deleteWishItem} />
      ))}
  </div>
);

WishList.propTypes = {
  wishList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      location: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      person: PropTypes.string,
    })
  ),
  deleteWishItem: PropTypes.func,
};

export default WishList;
