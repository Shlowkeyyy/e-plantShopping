import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const plants = [
  // =========================
  // AIR PURIFYING PLANTS
  // =========================
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2b2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Air Purifying Plants",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8f1063b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Boston Fern",
    category: "Air Purifying Plants",
    price: 26.99,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Air Purifying Plants",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1614594575924-6d8c7b3d5e9c?auto=format&fit=crop&w=600&q=80",
  },

  // =========================
  // LOW MAINTENANCE PLANTS
  // =========================
  {
    id: 7,
    name: "ZZ Plant",
    category: "Low Maintenance Plants",
    price: 27.99,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2e4b5f9d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Pothos",
    category: "Low Maintenance Plants",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1614594575924-6d8c7b3d5e9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Jade Plant",
    category: "Low Maintenance Plants",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1597055181300-aca6d0f4b9a1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Chinese Money Plant",
    category: "Low Maintenance Plants",
    price: 25.99,
    image:
      "https://images.unsplash.com/photo-1597055181300-aca6d0f4b9a1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Cast Iron Plant",
    category: "Low Maintenance Plants",
    price: 28.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Parlor Palm",
    category: "Low Maintenance Plants",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
  },

  // =========================
  // DECORATIVE PLANTS
  // =========================
  {
    id: 13,
    name: "Monstera Deliciosa",
    category: "Decorative Plants",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Calathea Orbifolia",
    category: "Decorative Plants",
    price: 36.99,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Bird of Paradise",
    category: "Decorative Plants",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1597055181300-aca6d0f4b9a1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Fiddle Leaf Fig",
    category: "Decorative Plants",
    price: 42.99,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Areca Palm",
    category: "Decorative Plants",
    price: 31.99,
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Caladium",
    category: "Decorative Plants",
    price: 23.99,
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList({ onHomeClick, onCartClick }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items || []);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Air Purifying Plants",
    "Low Maintenance Plants",
    "Decorative Plants",
  ];

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        image: plant.image,
        cost: plant.price,
      })
    );
  };

  const isInCart = (plant) => {
    return cartItems.some((item) => item.id === plant.id);
  };

  return (
    <div className="products-page">
      {/* NAVBAR */}
      <nav className="products-navbar">
        <div className="products-logo" onClick={onHomeClick}>
          🌿 Paradise Nursery
        </div>

        <div className="products-nav-links">
          <button onClick={onHomeClick}>Home</button>

          <button className="active-link">
            Plants
          </button>

          <button className="products-cart" onClick={onCartClick}>
            🛒 Cart <span>{totalItems}</span>
          </button>
        </div>
      </nav>

      {/* HEADER */}
      <section className="products-header">
        <p>OUR COLLECTION</p>
        <h1>Find Your Perfect Plant</h1>
        <span>
          Bring life into your home with our carefully selected collection.
        </span>
      </section>

      {/* CATEGORIES */}
      <main className="products-container">
        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section className="category-section" key={category}>
              <div className="category-heading">
                <h2>{category}</h2>
                <div className="category-line"></div>
              </div>

              <div className="products-grid">
                {categoryPlants.map((plant) => (
                  <article className="product-card" key={plant.id}>
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
                        {plant.category}
                      </p>

                      <div className="product-bottom">
                        <strong>
                          ${plant.price.toFixed(2)}
                        </strong>

                        <button
                          className={`add-button ${
                            isInCart(plant) ? "added" : ""
                          }`}
                          disabled={isInCart(plant)}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {isInCart(plant)
                            ? "✓ Added"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;