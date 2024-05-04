import { useState } from "react";
import "./App.css";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />          
      </Routes>
    </>
  );
}

export default App;
