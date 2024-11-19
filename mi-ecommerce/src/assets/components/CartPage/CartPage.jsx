import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default CartPage;
