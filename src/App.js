import React, { Suspense } from "react";
import "./App.css";
import "./css/select2/select2.min.css";
import "./css/css-hamburgers/hamburgers.min.css";
import { Routes, Route } from "react-router-dom";
// import Cart from "./Components/Cart_Page/Cart";
import Footer from "./Components/Footer/Footer";
import MainHeader from "./Components/Header/MainHeader";
import Home from "./Components/Home/Home";
// import RApp from "./Components/testRazorpay/RApp"
// import InitialLoader from "./Components/Loader/InitialLoader";
import {Encription,Decription} from "../src/Components/Encryption/Encription";
import InitialLoader from "./Components/Loader/InitialLoader";

// import MyProfile from "./Components/MyProfile/MyProfile";
// import Wishlist from "./Components/Wishlist/Wishlist";
// import SignIn from "./Components/LogInLogOut/SignIn";
// import SignUp from "./Components/LogInLogOut/SignUp";
// import SignInWithGoogle from "./Components/SignIn/SignInWithGoogle";
// import MainContact from "./Components/Contact/MainContact";
// import MainAbout from "./Components/About/MainAbout";
// import Product from "./Components/Home/Product";
// import MainBlog from "./Components/Blog/MainBlog";
const Product = React.lazy(() => import("./Components/Home/Product"));
const MainBlog = React.lazy(() => import("./Components/Blog/MainBlog"));
const MainAbout = React.lazy(() => import("./Components/About/MainAbout"));
const MainContact = React.lazy(() =>
  import("./Components/Contact/MainContact")
);
const SignInWithGoogle = React.lazy(() =>
  import("./Components/SignIn/SignInWithGoogle")
);
const SignUp = React.lazy(() => import("./Components/LogInLogOut/SignUp"));
const SignIn = React.lazy(() => import("./Components/LogInLogOut/SignIn"));
const Wishlist = React.lazy(() => import("./Components/Wishlist/Wishlist"));
const MyProfile = React.lazy(() => import("./Components/MyProfile/MyProfile"));
const Cart = React.lazy(() => import("./Components/Cart_Page/Cart"));

function App() {
  const encryptedData = Encription("testing", "bbb");
  // console.log(Decription(encryptedData,"bbb"));

  return (
    <>
      {/* <InitialLoader/> */}
      <MainHeader />
      <Suspense fallback={<InitialLoader/>}>
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
        <Route exact path="/wislist" element={<Wishlist />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
      </Routes>
      </Suspense>
      <Footer />
      {/* <RApp/> */}
    </>
  );
}

export default App;
