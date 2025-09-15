import Navbar from "../../redux_online_store/src/components/Navbar";
import Home from "../../redux_online_store/src/pages/Home";
import Cart from "../../redux_online_store/src/pages/Cart";
import Wishlist from "../../redux_online_store/src/pages/WishList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import {
  fetchProduct,
  calculateTotals,
} from "../../redux_online_store/src/features/cartSlice";
import { useEffect } from "react";
import Product from "../../redux_online_store/src/pages/Product";
import Modal from "../../redux_online_store/src/components/Modal";
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.modal?.isOpen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <Router>
      {isOpen && <Modal />}
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
