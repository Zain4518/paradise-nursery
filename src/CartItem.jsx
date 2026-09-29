import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </nav>

      <main className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="150"
                  height="150"
                />

                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item)}>
                      +
                    </button>
                  </div>

                  <p>
                    Item Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h2>
                Total Amount: ${totalAmount.toFixed(2)}
              </h2>

              <button
                onClick={() => alert("Coming Soon")}
              >
                Checkout
              </button>

              <Link to="/plants">
                <button>Continue Shopping</button>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
