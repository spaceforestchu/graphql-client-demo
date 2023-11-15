import { useState } from "react";
import { useNavigate } from "react-router";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import UsersPage from "./pages/UsersPage";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<UsersPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
