import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import clsx from "clsx";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import ProductDetails from "../../pages/ProductDetails";
import css from "./App.module.css";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
