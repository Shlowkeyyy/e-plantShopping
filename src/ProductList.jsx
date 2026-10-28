import { useDispatch, useSelector } from "react-redux";

import { addItem } from "./CartSlice";

import "./ProductList.css";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Snake Plant",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1593482892290-f54927ae2b2d?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Peace Lily",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Spider Plant",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Aloe Vera",
        price: 21.99,
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8f1063b?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Boston Fern",
        price: 26.99,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Rubber Plant",
        price: 32.99,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        name: "ZZ Plant",
        price: 27.99,
        image:
          "https://images.unsplash.com/photo-1632207691143-643e2e4b5f9d?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Pothos",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Jade Plant",
        price: 22.99,
        image:
          "https://images.unsplash.com/photo-1597055181300-aca6d0f4b9a1?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Chinese Money Plant",
        price: 25.99,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Cast Iron Plant",
        price: 28.99,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Parlor Palm",
        price: 34.99,
        image:
          "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    category: "Decorative Plants",
    plants: [
      {
        name: "Monstera Deliciosa",
        price: 39.99,
        image:
          "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Calathea",
        price: 36.99,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Bird of Paradise",
        price: 44.99,
        image:
          "https://images.unsplash.com/photo-1597055181300-aca6d0f4b9a1?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Fiddle Leaf Fig",
        price: 42.99,
        image:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Areca Palm",
        price: 31.99,
        image:
          "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Caladium",
        price: 23.99,
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

function ProductList({
  onHomeClick,
  onPlantsClick,
  onCartClick,
}) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const addedToCart = {};

  cartItems.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        name: plant.name,
        image: plant.image,
        cost: plant.price,
      })
    );
  };

  return (
    <div className="products-page">
      <nav className="navbar products-navbar">
        <div
          className="logo products-logo"
          onClick={onHomeClick}
        >
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <button onClick={onHomeClick}>
            Home
          </button>

          <button onClick={onPlantsClick}>
            Plants
          </button>

          <button
            className="cart-button"
            onClick={onCartClick}
          >
            🛒 Cart{" "}
            <span className="cart_quantity_count">
              {totalItems}
            </span>
          </button>
        </div>
      </nav>

      <section className="products-header">
        <p>OUR COLLECTION</p>

        <h1>Find Your Perfect Plant</h1>

        <span>
          Beautiful plants selected for your home and workspace.
        </span>
      </section>

      <main className="products-container">
        {plantsArray.map((category) => (
          <section
            className="category-section"
            key={category.category}
          >
            <div className="category-heading">
              <h2>{category.category}</h2>
              <div className="category-line"></div>
            </div>

            <div className="product-list">
              {category.plants.map((plant) => (
                <article
                  className="product-card"
                  key={plant.name}
                >
                  <div className="product-image-container">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />
                  </div>

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p className="product-category">
                      {category.category}
                    </p>

                    <div className="product-bottom">
                      <strong>
                        ${plant.price.toFixed(2)}
                      </strong>

                      <button
                        className={`add-button ${
                          addedToCart[plant.name]
                            ? "added"
                            : ""
                        }`}
                        disabled={
                          addedToCart[plant.name]
                        }
                        onClick={() =>
                          handleAddToCart(plant)
                        }
                      >
                        {addedToCart[plant.name]
                          ? "✓ Added"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;