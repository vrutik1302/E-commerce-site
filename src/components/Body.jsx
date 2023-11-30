import React from "react";
import ProductList from "./ProductList";
import Testimonials from "./Testimonials";

const Body = ({ setCountCart }) => {
  return (
    <main className="main">
      <ProductList setCountCart={setCountCart} />
      <Testimonials />
    </main>
  );
};

export default Body;
