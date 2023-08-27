import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProducto from "./productos/AddProducto";
import EditProducto from "./productos/EditProducto";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addproducto" element={<AddProducto />} />
          <Route exact path="/editproducto/:id" element={<EditProducto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
