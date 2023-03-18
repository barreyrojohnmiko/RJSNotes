import "./Home.css";

import AddButton from "../views/AddButton";
import Header from "../views/Header";
import Note from "./Note";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-section">
        <Header />
      </div>
      <div className="note-section">
        <Note />
      </div>
      <div className="add-button-section">
        <AddButton />
      </div>
    </div>
  );
};

export default Home;
