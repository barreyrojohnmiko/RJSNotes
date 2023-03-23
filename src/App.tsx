import { Route, Routes } from "react-router-dom";
import "./App.css";

import AddNote from "./components/addNote/AddNote";
import EditNote from "./components/editNote/EditNote";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="main-component">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/edit-note" element={<EditNote />} />
      </Routes>
    </div>
  );
};

export default App;
