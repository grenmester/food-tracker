import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Footer from "./components/Footer";
import InventoryForm from "./components/InventoryForm";
import InventoryList from "./components/InventoryList";
import Navbar from "./components/Navbar";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

const App = () => (
  <div>
    <Navbar />
    <main className="mt-4">
      <div className="container">
        <h1 className="mb-4">Food Tracker</h1>
        <section className="mb-5" id="inventory-list">
          <InventoryList />
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
          <InventoryForm />
        </section>
        <section className="mb-5" id="wish-list">
          <WishList />
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
          <WishForm />
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
