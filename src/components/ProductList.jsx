import React, { useEffect, useState } from "react";
import { getProducts } from "../utils/api";
const ProductList = ({ setCountCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchProducts();
  }, []);
  const handleAddToCart = () => {
    setCountCart((prevValue) => prevValue + 1);
  };

  return (
    <section className="product-list">
      <h2>Our Products </h2>
      <div className="products">
        {products?.map((product) => (
          <div className="product-card">
            <img src={product?.images[0]} />
            <h3>{product?.title}</h3>
            <p>{`$${product.price.toFixed(2)}`}</p>
            <button onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
