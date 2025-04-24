import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Define el tipo de producto
interface Product {
  id: string;
  description: string;
  price: number;
  stock: number;
}

const endpoint = "http://localhost:8000/api";

const ShowProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get<Product[]>(`${endpoint}/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id: string) => {
    await axios.delete(`${endpoint}/products/${id}`);
    await getAllProducts(); // <- asegurate de usar await si es async
  };

  return (
    <body>
      {" "}
      <div>
        <div className="d-grid gap-2">
          <Link
            to="/create"
            className="btn btn-success btn-lg mt-2 mb-2 text-white"
          >
            Create
          </Link>
        </div>

        <table className="table table-dark">
          <thead className="bg-primary text-white">
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link
                    to={`/edit/${product.id}`}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </body>
  );
};

export default ShowProducts;
