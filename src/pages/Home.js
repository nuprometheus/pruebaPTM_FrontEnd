import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProductos();
  }, []);

  const loadProductos = async () => {
    const result = await axios.get("http://localhost:8080/productos");
    setProductos(result.data);
  };

  const deleteProducto = async (id) => {
    await axios.delete(`http://localhost:8080/producto/${id}`);
    loadProductos();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewproducto/${producto.id}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproducto/${producto.id}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
