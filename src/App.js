import React from "react";
import Navbar from "./components/Navbar";
import InventoryList from "./components/InventoryList";
import WishList from "./components/WishList";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Navbar />
    <main className="mt-4">
      <div className="container">
        <h1 className="mb-4">Food Tracker</h1>
        <section className="mb-5" id="inventory-list">
          <InventoryList />
        </section>
        <section className="mb-5" id="wish-list">
          <WishList />
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
