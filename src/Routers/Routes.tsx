import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import About from "../Pages/AboutUs";
import Contact from '../Pages/Contact';
import AllProducts from '../Pages/AllProducts';



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/product/details" element={<Product />} />
       <Route path="/products" element={<AllProducts />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
