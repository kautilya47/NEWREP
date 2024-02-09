import { useState } from "react";
import Navbar from "./components/Navbar";
import Classification from "./pages/Classification";
import Home from "./pages/Home";
import Blurbs from "./pages/Blurbs";
import Flowcharts from "./pages/Flowcharts";
import Updates from "./pages/Updates";
import Errors from "./pages/Errors";
import { Route, Routes } from "react-router-dom";
import Links from "./pages/Links";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classification" element={<Classification />} />
          <Route path="/flowcharts" element={<Flowcharts />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/errors" element={<Errors />} />
          <Route path="/links" element={<Links />} />
          {/* <Route path="/links" element={<Links />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
