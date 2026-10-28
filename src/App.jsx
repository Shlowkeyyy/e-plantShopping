import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [page, setPage] = useState("home");

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">

      {/* HOME PAGE */}

      {page === "home" && (
        <>
          <nav className="navbar">
            <div
              className="logo"
              onClick={() => setPage("home")}
            >
              🌿 Paradise Nursery
            </div>

            <div className="nav-links">
              <button onClick={() => setPage("home")}>
                Home
              </button>

              <button onClick={() => setPage("about")}>
                About Us
              </button>

              <button onClick={() => setPage("plants")}>
                Plants
              </button>

              <button
                className="cart-button"
                onClick={() => setPage("cart")}
              >
                🛒 Cart <span>{totalItems}</span>
              </button>
            </div>
          </nav>

          <main className="hero">
            <div className="hero-overlay">

              <p className="eyebrow">
                BRING NATURE HOME
              </p>

              <h1>Paradise Nursery</h1>

              <p className="hero-text">
                Discover beautiful indoor plants that transform
                your space into a peaceful, refreshing paradise.
              </p>

              <button
                className="get-started"
                onClick={() => setPage("plants")}
              >
                Get Started →
              </button>

            </div>
          </main>
        </>
      )}

      {/* ABOUT PAGE */}

      {page === "about" && (
        <>
          <nav className="navbar">
            <div
              className="logo"
              onClick={() => setPage("home")}
            >
              🌿 Paradise Nursery
            </div>

            <div className="nav-links">
              <button onClick={() => setPage("home")}>
                Home
              </button>

              <button onClick={() => setPage("about")}>
                About Us
              </button>

              <button onClick={() => setPage("plants")}>
                Plants
              </button>

              <button
                className="cart-button"
                onClick={() => setPage("cart")}
              >
                🛒 Cart <span>{totalItems}</span>
              </button>
            </div>
          </nav>

          <AboutUs />
        </>
      )}

      {/* PLANTS PAGE */}

      {page === "plants" && (
        <ProductList
          onHomeClick={() => setPage("home")}
          onCartClick={() => setPage("cart")}
        />
      )}

      {/* CART PAGE */}

      {page === "cart" && (
        <CartItem
          onHomeClick={() => setPage("home")}
          onContinueShopping={() => setPage("plants")}
        />
      )}

    </div>
  );
}

export default App;