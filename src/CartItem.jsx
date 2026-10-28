import { useSelector, useDispatch } from "react-redux";

import {
  updateQuantity,
  removeItem,
} from "./CartSlice";

import "./cartitem.css";

function CartItem({
  onHomeClick,
  onContinueShopping,
}) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.cost * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-page">
      <nav className="navbar cart-navbar">
        <div
          className="logo cart-logo"
          onClick={onHomeClick}
        >
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <button onClick={onHomeClick}>
            Home
          </button>

          <button onClick={onContinueShopping}>
            Plants
          </button>

          <button className="cart-button">
            🛒 Cart{" "}
            <span className="cart_quantity_count">
              {totalItems}
            </span>
          </button>
        </div>
      </nav>

      <main className="cart-container">
        <div className="cart-header">
          <div>
            <p>YOUR SHOPPING CART</p>
            <h1>Cart</h1>
          </div>

          <button
            className="continue-top"
            onClick={onContinueShopping}
          >
            ← Continue Shopping
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">
              🌱
            </div>

            <h2>Your cart is empty</h2>

            <p>
              Discover some beautiful plants and bring
              a little more green into your space.
            </p>

            <button
              onClick={onContinueShopping}
              className="shop-button"
            >
              Browse Plants
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {cartItems.map((item) => {
                const itemTotal =
                  item.cost * item.quantity;

                return (
                  <article
                    className="cart-card"
                    key={item.name}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div className="cart-item-info">
                      <h2>{item.name}</h2>

                      <p>
                        Unit price: $
                        {item.cost.toFixed(2)}
                      </p>

                      <div className="quantity-controls">
                        <button
                          onClick={() =>
                            handleDecrement(item)
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            handleIncrement(item)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item-total">
                      <strong>
                        ${itemTotal.toFixed(2)}
                      </strong>

                      <button
                        className="cart-item-delete"
                        onClick={() =>
                          handleRemove(item)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside className="cart-summary">
              <p>ORDER SUMMARY</p>

              <h2>Your Cart</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>
                  ${totalAmount.toFixed(2)}
                </span>
              </div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  ${totalAmount.toFixed(2)}
                </strong>
              </div>

              <button
                className="checkout-button"
                onClick={() =>
                  alert("Checkout Coming Soon!")
                }
              >
                Checkout
              </button>

              <button
                className="continue-button"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;