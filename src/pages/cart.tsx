import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store.tsx";
import { addToCart, removeFromCart,removeCart } from "../store/slice/slice.tsx";
import Footer from "../components/footer/footer.tsx";
import Navbar from "../components/navbar/navbar.tsx";
import "./cart.css"; 
import axios from "axios";
interface confirm{
  id:string;

}



function Cart(): React.JSX.Element {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleDecrease = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      if (item.quantity > 1) {
        dispatch(addToCart({ ...item, quantity: -1 })); 
      } else {
        dispatch(removeFromCart(id)); 
      }
    }
  };

  const handleIncrease = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      dispatch(addToCart({ ...item, quantity: 1 }));
    }
  };

  async function confirm(cartItems:any,price:Number):Promise<any>{
  try {
    const a={...cartItems,...price}
    
      const res = await axios.post("http://localhost:3000/cart/Confirm", a);
      dispatch(removeCart(true)); 
      alert(`Order Successfully placed ₹${price}`);
      console.log("success")
      
    } catch (err) {
      console.error(err);
    } 

}
 

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price ) * item.quantity,
    0
  );

  return (
    <>
   
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      

      {cartItems.length === 0 && 
      <p>Your cart is empty.</p>}

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.img} alt={item.name} />
          <div className="cart-info">
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
      <div className="controls">
        <button onClick={() => handleDecrease(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleIncrease(item.id)}>+</button>
      </div>

            <p className="subtotal"> Subtotal: ₹{(item.price ) * item.quantity} </p>
          </div>
          <button className="remove-btn"  onClick={() => dispatch(removeFromCart(item.id))} > ✖  </button>
        </div> ))}

      {cartItems.length > 0 && ( <> 
      <h4 className="total">Total: ₹{totalPrice}</h4>
          <h4 className="total">Delivery partner: ₹50</h4>
          <h3 className="total-price">Total Amount: ₹{totalPrice+50}</h3>
        </>
      )}

      {cartItems.length > 0 && (
        <> 
          <button className="Confirm_button"  onClick={() => confirm(cartItems,totalPrice+50)}>Confirm </button>
        </>
      )}
    </div>
    
    </>
  );
}

export default Cart;



