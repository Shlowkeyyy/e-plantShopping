import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "./CartSlice";

import "./cartitem.css";

function CartItem({ onHomeClick, onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <nav className="cart-navbar">
        <div className="cart-logo" onClick={onHomeClick}>
          🌿 Paradise Nursery
        </div>

        <div className="cart-nav-links">
          <button onClick={onHomeClick}>Home</button>

          <button onClick={onContinueShopping}>
            Plants
          </button>

          <button className="cart-active">
            🛒 Cart {totalItems}
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
            <div className="empty-icon">🌱</div>

            <h2>Your cart is empty</h2>

            <p>
              Discover some beautiful plants and bring a
              little more green into your space.
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
                const itemTotal = item.cost * item.quantity;

                return (
                  <article
                    className="cart-card"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
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
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
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
                        className="delete-button"
                        onClick={() =>
                          dispatch(
                            removeItem(item.id)
                          )
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