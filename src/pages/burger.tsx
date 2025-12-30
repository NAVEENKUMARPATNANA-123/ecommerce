import { products } from "../data/food_items.tsx";
import { addToCart } from "../store/slice/slice.tsx";
import { useDispatch } from "react-redux";
import './burger.css';
import { useNavigate } from "react-router-dom";




function Burger(): React.JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const burgerList = products.filter(product => product.category === "burger");

  return (
    <div className="burger-container">
      {burgerList.map((item) => (
        <div className="burger-card" key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
          <img src={item.img} alt={item.name} />
          <span className={`category-badge ${item.category}`}>
                {item.category.toUpperCase()}
              </span>
          <h3>{item.name}</h3>
          <p className="price">₹{item.price}</p>
          <button onClick={() => dispatch(addToCart({
                id: item.id,
                name: item.name,
                img: item.img,  
              }))
            }> Add to Cart </button>
        </div>
      ))}
    </div>
  );
}

export default Burger;
