import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Top />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
