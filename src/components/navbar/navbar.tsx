import { Link} from 'react-router-dom'
import './navbar.css'
function navbar(): React.JSX.Element{
    return(
        <>
        <nav className="navbar">
            <div className="navbar">
                <Link to="/">🏠 </Link>
                <Link to="/biryani">🍛 Biryani</Link>
                <Link to="/pizza">🍕 Pizza</Link>
                <Link to="/burger">🍔 Burger</Link>
                <Link to="/cooldrinks">🥤 Cool Drinks</Link>

                
            </div>
            <div className='cart' >
                <Link to="/add-food" >
                    <button className='addFood' >🧑‍🍳 Add Food</button>
                </Link>
                <Link to="/delete-food" >
                    <button className='deleteFood'> 🍺Manage Food</button>
                </Link>
                <Link to="/cart">🛒cart</Link>
            </div>
        </nav>
        </>
    )
}


export default navbar;


