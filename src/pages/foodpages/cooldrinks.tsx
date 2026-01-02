import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.tsx";
import Footer from "../../components/footer/footer.tsx";
import axios from "axios";
import './cooldrinks.css';
import FoodRender from "../../components/foodRender.tsx";

interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description: string;
}

function CoolDrinks(): React.JSX.Element {
 

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3000/api/products")
      .then(response => setProducts(response.data))
      .then(()=>setLoading(false))
      .catch(err => console.error("Failed to fetch products", err))
      
  }, []);

  const drinksList = products.filter(product => product.category === "cooldrinks");

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      
      <FoodRender List={drinksList}  />
      
    </>
    // <div className="drinks-container">
    //   {drinksList.map(item => (
    //     <div
    //       className="drinks-card"
    //       key={item.id}
    //       onClick={() => navigate(`/product/${item.id}`)}>
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
    //               img: item.img,quantity:1,price:item.price?item.price:0,
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

export default CoolDrinks;
