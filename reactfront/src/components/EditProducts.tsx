import axios from "axios";
import React, { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/products/";

const EditProducts: React.FC = () => {
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const update = async (e: FormEvent) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      description,
      price,
      stock,
    });
    navigate("/");
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
    };
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <h3>Editar producto</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default EditProducts;
