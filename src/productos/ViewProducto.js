import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProducto() {
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadProducto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProducto = async () => {
    const result = await axios.get(`http://localhost:8080/producto/${id}`);
    setProducto(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalle Productos</h2>

          <div className="card">
            <div className="card-header">
              Detalles de producto id : {producto.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nombre:</b>
                  {producto.nombre}
                </li>
                <li className="list-group-item">
                  <b>Descripcion:</b>
                  {producto.descripcion}
                </li>
                <li className="list-group-item">
                  <b>Precio:</b>
                  {producto.precio}
                </li>
                <li className="list-group-item">
                  <b>Cantidad:</b>
                  {producto.cantidad}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"*"}>
            Regresar al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
