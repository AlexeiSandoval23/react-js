import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext.jsx";
import Button from "../Button/Button.jsx";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const allProducts = [
        { id: 1, name: "Laptop", description: "Una laptop potente" },
        { id: 2, name: "Camiseta", description: "Camiseta de algodón" },
        { id: 3, name: "Silla", description: "Silla ergonómica" },
      ];

      const selectedProduct = allProducts.find(
        (p) => p.id === parseInt(productId)
      );
      setProduct(selectedProduct);
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} agregado al carrito`);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <Button
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </Button>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ItemDetailContainer;
