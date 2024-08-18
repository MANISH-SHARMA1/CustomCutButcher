import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import Dishes from "./pages/Dishes";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/dishes/:id" element={<Dishes />} />
          <Route path="/product-detail" element={<ProductDetail />} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
