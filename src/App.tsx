
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import HomePage from './pages/home.tsx';
import Biryani from './pages/foodpages/biryani.tsx';
import Burger from './pages/foodpages/burger.tsx';
import Pizza from './pages/foodpages/pizza.tsx';
import Cooldrinks from './pages/foodpages/cooldrinks.tsx';
import Cart from './pages/cart.tsx';
import ProductDetails from './components/productDetails/productDetails.tsx';
import AddFood from "./pages/addFood.tsx";
import DeleteFood from "./pages/manageFood.tsx";
import Footer from './components/footer/footer.tsx';

import Navbar from './components/navbar/navbar.tsx';
function App():React.JSX.Element {
  return (
    <div className="App">
          <>
            <BrowserRouter>
               <Navbar/>
                <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/biryani' element={<Biryani/>}/>
                  <Route path='/pizza' element={<Pizza/>}/>
                  <Route path='/burger' element={<Burger/>}/>
                  <Route path='/cooldrinks' element={<Cooldrinks/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/add-food" element={<AddFood />} /> 
                  <Route path="/delete-food" element={<DeleteFood />} />
                  </Routes>
               
            <Footer/>
            </BrowserRouter>
          </>
    </div>
  );
}
export default App;
