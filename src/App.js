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
// import RApp from "./Components/testRazorpay/RApp"
import Wishlist from "./Components/Wishlist/Wishlist";
import MyProfile from "./Components/MyProfile/MyProfile";
// import InitialLoader from "./Components/Loader/InitialLoader";
import { getDatabase,child, ref, onValue, query, orderByChild, equalTo, limitToFirst, limitToLast, startAt,startAfter, endAt, endBefore, set, update, remove, get } from "firebase/database";

function App() {
  //!to inseret new data in firebase{"TheStudents" is the main and 14 is the first child}
  // const db = getDatabase();
  // set(ref(db, "TheStudents/" + 14),{
  //   NameOfStd: "pradeep",
  //   RollNo: 45,
  //   Section: "D",
  //   Gender: "male"
  // }).then(()=> {
  //   alert("data stored succesfully")
  // }).catch((error)=> alert("erros"))


  //! this is to get data from firebase{""TheStudents/" + 14" is the path from where we want to access}
  // const db = getDatabase();
  // const dbref = ref(db);
  // get(child(dbref,"TheStudents/" + 14))
  // .then((snapshot)=>{
  //   if (snapshot) {
  //     console.log(snapshot.val(),"snapshot is here");
  //   } else {
  //     alert("no data found")
  //   }
  // })
  // .catch((error)=> alert(error))

  //! This is for the updation of the data
  // const db = getDatabase();
  // update(ref(db, "TheStudents/" + 14),{
  //   NameOfStd: "pradeep",
  //   RollNo: 45,
  //   Section: "Ddddd",
  //   Gender: "male"
  // }).then(()=> {
  //   alert("data updated succesfully")
  // }).catch((error)=> alert("erros"))

  //! This is for the deletion of the data {we here only need the path, not full data}
  // const db = getDatabase();
  // remove(ref(db, "TheStudents/" + 14)).then(()=> {
  //   alert("data removed succesfully")
  // }).catch((error)=> alert("erros"))

  //! This is for when we want the realtime data which new data added/updated on firebase in client side without reloading the page
  // const db = getDatabase();
  // const dbref = ref(db,"TheStudents");
  // onValue(dbref,(snapshot)=> {
  //   console.log(snapshot.val(),"snapshot is here");
  // })
  //! This is the query function, getting the data of first 6 only from database, db k baad jo daala h wo path h
  // const db = getDatabase();
  // const que = query(ref(db,"productList"), limitToFirst(6));
  // get(que)
  // .then((snapshot)=>{
  //   if (snapshot) {
  //     console.log(snapshot.val(),"snapshot is here");
  //   } else {
  //     alert("no data found")
  //   }
  // })
  // .catch((error)=> alert(error))
    //! This is the query function, getting the data of last 6 only from database, db k baad jo daala h wo path h
  // const db = getDatabase();
  // const que = query(ref(db,"productList"), limitToLast(6));
  // get(que)
  // .then((snapshot)=>{
  //   if (snapshot) {
  //     console.log(snapshot.val(),"snapshot is here");
  //   } else {
  //     alert("no data found")
  //   }
  // })
  // .catch((error)=> alert(error))
//! this is getting sorted data on the particlar basis like id, gender, which we pass in the orderByChild("id"),keep in mind that we have to update it in the firebase database rule also. mode of sorting is A-Z then a-z. for decendin we can use array.reverse
  // const db = getDatabase();
  // const que = query(ref(db,"productList"), orderByChild("id"));
  // get(que)
  // .then((snapshot)=>{
  //   if (snapshot) {
  //     console.log(snapshot.val(),"snapshot is here");
  //   } else {
  //     alert("no data found")
  //   }
  // })
  // .catch((error)=> alert(error))

  //! This is quey for getting data which start at(means all data after starts at 2), equalto, keep ind mind we can also change the orderbychild which means to have the data on the particluar basis. we can also use the combination like start to and end to.
  //   const db = getDatabase();
  // const que = query(ref(db,"productList"), orderByChild("id"), equalTo(2));
  // get(que)
  // .then((snapshot)=>{
  //   if (snapshot) {
  //     console.log(snapshot.val(),"snapshot iss here");
  //   } else {
  //     alert("no data found")
  //   }
  // })
  // .catch((error)=> alert(error))



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
        <Route exact path="/wislist" element={<Wishlist/>} />
        <Route exact path="/myprofile" element={<MyProfile/>} />
      </Routes>
      <Footer />
      {/* <RApp/> */}
    </>
  );
}

export default App;
