// Main.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CRUDTab from "./CRUDTab";
import SearchTab from "./SearchTab";
import ThreeStars from "./ThreeStars";
import FourStars from "./FourStars";
import FiveStars from "./FiveStars";
import Hanoi from "./Hanoi";
import Halong from "./Halong";
import Danang from "./Danang";
import NhaTrang from "./NhaTrang";
import HoChiMinh from "./HoChiMinh";
import UserDetail from "./UserDetail"
// Import các component tương ứng với các file Age khác

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/crud" element={<CRUDTab />} />
          <Route path="/" element={<SearchTab />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/threestars" element={<ThreeStars />} />
          <Route path="/fourstars" element={<FourStars />} />
          <Route path="/fivestars" element={<FiveStars />} />
          <Route path="/hanoi" element={<Hanoi />} />
          <Route path="/halong" element={<Halong />} />
          <Route path="/danang" element={<Danang />} />
          <Route path="/nhatrang" element={<NhaTrang />} />
          <Route path="/hochiminh" element={<HoChiMinh />} />
          {/* Thêm các Route tương ứng với các file Age khác */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;