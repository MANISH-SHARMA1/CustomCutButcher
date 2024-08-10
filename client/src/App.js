import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
