import "./App.css";
import "./css/select2/select2.min.css";
import './css/css-hamburgers/hamburgers.min.css'
import Cart from "./Components/Cart_Page/Cart";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Header/MainHeader";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./Components/Home/Product";
import MainBlog from "./Components/Blog/MainBlog";
import MainAbout from "./Components/About/MainAbout";
import MainContact from "./Components/Contact/MainContact";
import SignInWithGoogle from "./Components/SignIn/SignInWithGoogle";
import SignUp from "./Components/LogInLogOut/SignUp";
import SignIn from "./Components/LogInLogOut/SignIn";
import RApp from "./Components/testRazorpay/RApp"
// import InitialLoader from "./Components/Loader/InitialLoader";

function App() {

  return (
    <>
      {/* <InitialLoader/> */}
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/blog" element={<MainBlog />} />
        <Route exact path="/about" element={<MainAbout />} />
        <Route exact path="/contact" element={<MainContact />} />
        <Route exact path="/signin" element={<SignInWithGoogle />} />
        <Route exact path="/test" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <RApp/>
    </>
  );
}

export default App;
