import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProducto() {
  let navigate = useNavigate();
  const { id } = useParams();
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
  useEffect(() => {
    loadProducto();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/producto/${id}`, producto);
    navigate("/");
  };

  const loadProducto = async () => {
    const result = await axios.get(`http://localhost:8080/producto/${id}`);
    setProducto(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Producto
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese el nombre del producto"
                name="nombre"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Descripcion
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese la descripcion del producto"
                name="descripcion"
                value={descripcion}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
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
              <label htmlFor="Email" className="form-label">
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
