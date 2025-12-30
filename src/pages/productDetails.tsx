import { useParams } from "react-router-dom";
import { products } from "../data/food_items.tsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/slice.tsx";
import "./productDetails.css";

function ProductDetails(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />

      <div className="details-info">
        <span className={`category ${product.category}`}>
          {product.category.toUpperCase()}
        </span>

        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>

        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id,
                name: product.name,
                img: product.img,
              })
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
