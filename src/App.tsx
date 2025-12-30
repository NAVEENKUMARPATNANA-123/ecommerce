
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import HomePage from './pages/home.tsx';
import Biryani from './pages/biryani.tsx';
import Burger from './pages/burger.tsx';
import Pizza from './pages/pizza.tsx';
import Cooldrinks from './pages/cooldrinks.tsx';
import Cart from './pages/cart.tsx';
import ProductDetails from "./pages/productDetails.tsx";



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
            </Routes>
            
            </BrowserRouter>
          </>
    </div>
  );
}
export default App;
