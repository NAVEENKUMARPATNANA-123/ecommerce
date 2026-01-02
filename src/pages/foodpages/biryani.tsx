import { useEffect, useState } from "react";
import axios from "axios";
import "./biryani.css";
import FoodRender from "../../components/foodRender.tsx";
interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description: string;
}
function Biryani(): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then(response => setProducts(response.data))
      .catch(err => console.error("Failed to fetch products", err))
      .finally(() => setLoading(false));
  }, []);
  const biryaniList = products.filter(product => product.category === "biryani");
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  return (
    <>
      <FoodRender List={biryaniList}  />
    </>
  );
}

export default Biryani;



// <div className=" biryani-parent">
    //   <h1 className="home-title">🍽️ Biryani</h1>

    //   <div className="biryani-container">
    //     {biryaniList.map(item => (
    //       <div
    //         className="biryani-card"
    //         key={item.id}
    //         onClick={() => navigate(`/product/${item.id}`)}
    //       >
    //         <img src={item.img} alt={item.name} />

    //         <span className={`category-badge ${item.category}`}>
    //           {item.category}
    //         </span>

    //         <h3>{item.name}</h3>
    //         <p className="price">₹{item.price}</p>

    //         <button
    //           onClick={e => {
    //             e.stopPropagation(); 
    //             dispatch(
    //               addToCart({
    //                 id: item.id,
    //                 name: item.name,
    //                 img: item.img,
    //                 quantity:1,price:item.price?item.price:0,
    //               })
    //             );
                
    //             navigate("/cart")
    //           }}
    //         >
    //           Add to Cart
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    //   {cartItems.length !==0 && <div className='fixed-button-container'>
    //     <Link to="/cart">🛒cart</Link>
    //   </div>}
    // </div>