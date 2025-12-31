import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/slice.tsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./home.css";

interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description: string;
}

function HomePage(): React.JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3000/api/products")
      .then(response => setProducts(response.data))
      .catch(err => console.error("Failed to fetch products", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (

    
    <div className="home-page">
      <h1 className="home-title">🍽️ Explore Our Menu</h1>

      <div className="food-grid">
        {products.map(item => (
          <div
            className="food-card"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.img} alt={item.name} />

            <div className="food-info">
              <span className={`category-badge ${item.category}`}>
                {item.category}
              </span>

              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>

              <button
                onClick={e => {
                  e.stopPropagation();
                  dispatch(
                    addToCart({
                      id: item.id,
                      name: item.name,
                      img: item.img,
                      quantity:1,price:item.price?item.price:0,
                    })
                  );
                }}
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
