import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    category: "Indoor Plants",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 4,
    name: "Spider Plant",
    category: "Indoor Plants",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 5,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 6,
    name: "Pothos",
    category: "Indoor Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1614594575929-bf5d4b0d8c4a",
  },

  {
    id: 7,
    name: "Rose",
    category: "Flowering Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    name: "Orchid",
    category: "Flowering Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb",
  },
  {
    id: 9,
    name: "Jasmine",
    category: "Flowering Plants",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
  },
  {
    id: 10,
    name: "Hibiscus",
    category: "Flowering Plants",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1597848212624-e19c2c2f2f0e",
  },
  {
    id: 11,
    name: "Lavender",
    category: "Flowering Plants",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
  },
  {
    id: 12,
    name: "Marigold",
    category: "Flowering Plants",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1590172205841-d6c1a0e3c6e6",
  },

  {
    id: 13,
    name: "Basil",
    category: "Herbs",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733",
  },
  {
    id: 14,
    name: "Mint",
    category: "Herbs",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1628556270448-4d4e4148e1c9",
  },
  {
    id: 15,
    name: "Rosemary",
    category: "Herbs",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
  },
  {
    id: 16,
    name: "Thyme",
    category: "Herbs",
    price: 13,
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733",
  },
  {
    id: 17,
    name: "Cilantro",
    category: "Herbs",
    price: 11,
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
  },
  {
    id: 18,
    name: "Oregano",
    category: "Herbs",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      <main>
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category} className="plant-category">
            <h2>{category}</h2>

            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="200"
                      height="200"
                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
