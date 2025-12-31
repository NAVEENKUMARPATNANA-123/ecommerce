import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RootState } from "../../store/store.tsx";
import FoodRender from "../../components/foodRender.tsx";

import "./burger.css";


interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description: string;
}

function Burger(): React.JSX.Element {

  
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3000/api/products")
      .then(response => setProducts(response.data))
      .catch(err => console.error("Failed to load products", err))
      .finally(() => setLoading(false));
  }, []);

  const burgerList = products.filter(product => product.category === "burger");

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <FoodRender List={burgerList} />
    // <div className="burger-container">
    //   {burgerList.map(item => (
    //     <div
    //       className="burger-card"
    //       key={item.id}
    //       onClick={() => navigate(`/product/${item.id}`)}
    //     >
    //       <img src={item.img} alt={item.name} />

    //       <span className={`category-badge ${item.category}`}>
    //         {item.category}
    //       </span>

    //       <h3>{item.name}</h3>
    //       <p className="price">₹{item.price}</p>

    //       <button
    //         onClick={e => {
    //           e.stopPropagation(); 
    //           dispatch(
    //             addToCart({
    //               id: item.id,
    //               name: item.name,
    //               img: item.img,
    //               quantity:1,price:item.price?item.price:0,
    //             })
    //           );
    //           navigate("/cart")
    //         }}
    //       >
    //         Add to Cart
    //       </button>
    //     </div>
    //   ))}
      
    // </div>
  );
}

export default Burger;
