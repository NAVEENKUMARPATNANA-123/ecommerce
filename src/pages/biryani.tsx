

import { products } from "../data/food_items.tsx";
import { addToCart } from "../store/slice/slice.tsx";
import { useDispatch } from "react-redux";
import './biryani.css';
import { useNavigate } from "react-router-dom";

function Biryani(): React.JSX.Element {
    const navigate = useNavigate();

  const dispatch = useDispatch();
   const biryaniList = products.filter(product => product.category === "biryani");
   console.log(biryaniList)
  return (
    <div className="biryani-container">
      {biryaniList.map((item) => (
        <div className="biryani-card" key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
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

export default Biryani;
