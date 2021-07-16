import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Footer from "./components/Footer";
import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList";
import Navbar from "./components/Navbar";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

const App = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const addInventoryItem = ({ title, quantity, location, tags, date, image }) =>
    setInventoryList([
      ...inventoryList,
      { title, quantity, location, tags, date, image },
    ]);

  const addWishItem = ({ title, quantity, location, tags, person, image }) =>
    setWishList([
      ...wishList,
      { title, quantity, location, tags, person, image },
    ]);

  return (
    <div>
      <Navbar />
      <main className="mt-4">
        <div className="container">
          <h1 className="mb-4">Food Tracker</h1>
          <section className="mb-5" id="inventory-list">
            <InventoryList inventoryList={inventoryList} />
            <div className="d-flex justify-content-center mt-3">
              <a
                href="#"
                className="link-secondary"
                data-bs-toggle="modal"
                data-bs-target="#inventoryListModal"
              >
                <BsPlusCircleFill className="fs-1" />
              </a>
            </div>
            <InventoryForm addInventoryItem={addInventoryItem} />
          </section>
          <section className="mb-5" id="wish-list">
            <WishList wishList={wishList} />
            <div className="d-flex justify-content-center mt-3">
              <a
                href="#"
                className="link-secondary"
                data-bs-toggle="modal"
                data-bs-target="#wishListModal"
              >
                <BsPlusCircleFill className="fs-1" />
              </a>
            </div>
            <WishForm addWishItem={addWishItem} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
