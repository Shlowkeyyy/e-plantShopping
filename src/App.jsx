import { useState } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleGetStartedClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
    setShowAbout(false);
  };

  const handlePlantsClick = () => {
    setShowProductList(true);
    setShowCart(false);
    setShowAbout(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowProductList(false);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowProductList(false);
    setShowCart(false);
  };

  if (showProductList) {
    return (
      <ProductList
        onHomeClick={handleHomeClick}
        onPlantsClick={handlePlantsClick}
        onCartClick={handleCartClick}
      />
    );
  }

  if (showCart) {
    return (
      <CartItem
        onHomeClick={handleHomeClick}
        onContinueShopping={handlePlantsClick}
      />
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div
          className="logo"
          onClick={handleHomeClick}
        >
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <button onClick={handleHomeClick}>
            Home
          </button>

          <button onClick={handleAboutClick}>
            About Us
          </button>

          <button onClick={handlePlantsClick}>
            Plants
          </button>

          <button
            className="cart-button"
            onClick={handleCartClick}
          >
            🛒 Cart{" "}
            <span className="cart_quantity_count">
              {totalItems}
            </span>
          </button>
        </div>
      </nav>

      {showAbout ? (
        <AboutUs />
      ) : (
        <main className="background-image">
          <div className="hero">
            <div className="hero-overlay">
              <p className="eyebrow">
                BRING NATURE HOME
              </p>

              <h1>
                Welcome to Paradise Nursery
              </h1>

              <p className="hero-text">
                Discover beautiful indoor plants that
                transform your space into a peaceful,
                refreshing paradise.
              </p>

              <button
                className="get-started"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;