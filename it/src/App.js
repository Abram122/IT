import { Route , Routes } from "react-router";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Home from "./components/Home"
import Product from "./components/Product"
import About from "./components/About"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import AddProudct from "./components/AddProudct";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Order from "./components/Order";
import Orders from "./components/Orders";
import AddCategory from "./components/AddCategory";
import AllProducts from "./components/Allproducts";
import HomeControl from "./components/HomeControl";
function App() {
  return (  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/allproducts" element={<AllProducts/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/AddProudct" element={<AddProudct/>} />
      <Route path="/AddCategory" element={<AddCategory/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/homecontrol" element={<HomeControl/>} />
      <Route path="/Admin" element={<Admin/>} />
    </Routes>
  );
}

export default App;
