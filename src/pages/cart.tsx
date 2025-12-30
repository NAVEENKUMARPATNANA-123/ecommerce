import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store.tsx";
import { removeFromCart } from "../store/slice/slice.tsx";

function Cart(): React.JSX.Element {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "30px" }}>
      <h2>🛒 Cart</h2>

      {cartItems.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "15px",
          }}
        >
          <img src={item.img} width={70} />
          <strong>{item.name}</strong>
          <span>Qty: {item.quantity}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
