import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext.jsx";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Accede al contexto del carrito

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = [
        {
          id: 1,
          name: "Laptop",
          category: "electronica",
          image: "/src/assets/image/laptop.png",
        },
        {
          id: 2,
          name: "Camiseta",
          category: "ropa",
          image: "/src/assets/image/camisa.png", 
        },
        {
          id: 3,
          name: "Silla",
          category: "hogar",
          image: "/src/assets/image/silla.jpg", 
        },
      ];

      const filteredProducts = categoryId
        ? allProducts.filter((p) => p.category === categoryId)
        : allProducts;

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [categoryId]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} agregado al carrito`);
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "130px",
                height: "100px",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            <span style={{ flexGrow: 1 }}>{product.name}</span>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                padding: "5px 10px",
                marginLeft: "10px",
                backgroundColor: "#bf2004",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
