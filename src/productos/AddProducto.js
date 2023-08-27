import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddProducto() {
  let navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
  });
  const { nombre, descripcion, precio, cantidad } = producto;
  const onInputChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/producto", producto);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Registrar Producto</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Nombre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite el nombre del producto"
                name="nombre"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Descripcion" className="form-label">
                Descripcion
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese la descripcion"
                name="descripcion"
                value={descripcion}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Precio" className="form-label">
                Precio
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Ingrese el precio"
                name="precio"
                value={precio}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Cantidqad" className="form-label">
                Cantidad
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Ingrese la cantidad"
                name="cantidad"
                value={cantidad}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Enviar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
