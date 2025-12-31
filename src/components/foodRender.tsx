import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slice/slice.tsx";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description: string;
}


function FoodRender({ List }: { List: Product[] }): React.JSX.Element {
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="biryani-parent">
            <h1 className="home-title">{List[0].category.toUpperCase()}</h1>
            <div className="biryani-container">
                {List.map(item => (
                    <div
                        className="biryani-card"
                        key={item.id}
                        onClick={() => navigate(`/product/${item.id}`)}
                    >
                        <img src={item.img} alt={item.name} />
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
                                        quantity: 1,
                                        price: item.price ?? 0,
                                    })
                                );
                                navigate("/cart");
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            {List.length !== 0 && (
                <div className='fixed-button-container'>
                    <Link to="/cart">🛒 cart ({cartItems.length})</Link>
                </div>
            )}
        </div>

    );
}

export default FoodRender;
