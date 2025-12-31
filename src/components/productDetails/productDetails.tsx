import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/slice.tsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./productDetails.css";

interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description: string;
}

function ProductDetails(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    axios
      .get<Product>(`http://localhost:3000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Failed to fetch product", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (!product) return <h2 style={{ textAlign: "center" }}>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />

      <div className="details-info">
        <span className={`category ${product.category}`}>
          {product.category}
        </span>
        

        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>

        <div className="quantity-selector">
          <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() =>
           {
             dispatch(
              addToCart({
                id: product.id,
                name: product.name,
                img: product.img,
                quantity,
                price:product.price?product.price:0,
              })
              
            )

            navigate("/cart")
           }
            
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
