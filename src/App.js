import "./App.css";
import Cart from "./Components/Cart_Page/Cart";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Header/MainHeader";
import Home from "./Components/Home/Home";
import { Routes ,Route } from 'react-router-dom';
import Product from "./Components/Home/Product";

function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/product" element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
