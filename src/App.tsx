import { Route, Routes } from "react-router-dom";
import "./App.css";

import AddNote from "./components/AddNote";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-note" element={<AddNote />} />
      </Routes>
    </div>
  );
};

export default App;
