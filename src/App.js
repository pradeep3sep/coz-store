import "./App.css";
import Cart from "./Components/Cart_Page/Cart";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Header/MainHeader";
import Home from "./Components/Home/Home";
import { Routes ,Route } from 'react-router-dom';
import Product from "./Components/Home/Product";
import MainBlog from "./Components/Blog/MainBlog";
import MainAbout from "./Components/About/MainAbout";
import MainContact from "./Components/Contact/MainContact";
import Modal from "./Components/Modal/Modal";
import Testmodal from "./Testmodal";

function App() {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/blog" element={<MainBlog/>} />
        <Route exact path="/about" element={<MainAbout/>} />
        <Route exact path="/contact" element={<MainContact/>} />
      </Routes>
      {/* Modal */}
      <Modal/>
      <Testmodal/>
      <Footer />
    </>
  );
}

export default App;
