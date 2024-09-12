import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProductDescription from '../components/ProductDescription';
import ShoopingCart from '../components/ShoopingCart';
import Home from '../pages/Home';

const RouterOutlet = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/description/:productId" element={<ProductDescription/>}/>
            <Route path="/viewcart" element={<ShoopingCart/>}/>
        </Routes>
    </Router>
    )
}

export default RouterOutlet;