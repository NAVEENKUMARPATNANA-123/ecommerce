import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/navbar.tsx";
import Footer from "../../components/footer/footer.tsx";
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
    <>
      <FoodRender List={burgerList}  />
    </>
    
  );
}

export default Burger;
