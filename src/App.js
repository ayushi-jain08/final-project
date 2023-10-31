import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search/Search";
import Newsletter from "./Pages/Footer/Newsletter";

import SingleCategory from "./Components/Category/SingleCategory";
import Footer from "./Pages/Footer/Footer";
import SingleProducts from "./Pages/SingleProducts/SingleProducts";
import Product from "./Pages/AllProduct/Product";
import Login from "./Pages/LogIn/Login";
import SignUp from "./Pages/LogIn/SignUp";
import ProctectedAuth from "./Pages/LogIn/ProctectedAuth";
import Review from "./Pages/Review/Review";
import Cart from "./Components/Carts/Cart";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProctectedAuth/>}>
       
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/singlecategory/:type" element={<SingleCategory />} />
        <Route path="/singleproduct/:id" element={<SingleProducts />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
