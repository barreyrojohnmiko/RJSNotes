import React from "react";
import "./Home.css";

import Header from "../views/Header";
import AddButton from "../views/AddButton";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-section">
        <Header />
      </div>
      <div className="add-button-section">
        <AddButton />
      </div>
    </div>
  );
};

export default Home;
