import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Navbar />
    <main>
      <div className="container">
        <p>Food Tracker</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
