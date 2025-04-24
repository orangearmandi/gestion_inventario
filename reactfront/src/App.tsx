import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowProducts from "./components/ShowProducts";
import CreateProduct from "./components/CreateProduct";
import EditProducts from "./components/EditProducts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
