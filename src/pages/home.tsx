import { products } from "../data/food_items.tsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/slice.tsx";
import { useNavigate } from "react-router-dom";

import "./home.css";

function HomePage(): React.JSX.Element {
  const dispatch = useDispatch();
   const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 className="home-title">🍽️ Explore Our Menu</h1>

      <div className="food-grid" >
        {products.map((item) => (
          <div   className="food-card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)} >
            <img src={item.img} alt={item.name} />

            <div className="food-info">
              <span className={`category-badge ${item.category}`}>
                {item.category.toUpperCase()}
              </span>

              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      name: item.name,
                      img: item.img,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
