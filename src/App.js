import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <Header />
    <main>
      <div className="container">
        <p>Food Tracker</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
