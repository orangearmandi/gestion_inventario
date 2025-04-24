import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/products";

const CreateProduct = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();
  const store = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios.post(endpoint, {
      description: description,
      price: price,
      stock: stock,
    });
    navigate("/");
  };

  return (
    <div>
      <h3>create product</h3>
      <form onSubmit={store} method="post">
        <div className="mb-3">
          <label className="form-label"> Descripcion</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">sprice</label>
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            type="number"
            className="form-control"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          store
        </button>
      </form>
    </div>
  );
};
export default CreateProduct;
