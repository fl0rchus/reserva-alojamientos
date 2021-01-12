import React, { useContext } from "react";
import { hotelsData, hotelsContext } from "../context/DataContext";

export default function Filters() {
  const { fields, setFields } = useContext(hotelsContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between">
        <div className="nav-item date-item">
          <label className="text-white "> Desde:</label>
          <input
            value={fields.from}
            name="from"
            type="date"
            className="form-control"
            onChange={(e) => {
              setFields({ ...fields, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <div className="nav-item date-item">
          <label className="text-white"> Hasta:</label>
          <input
            value={fields.to}
            name="to"
            type="date"
            className="form-control"
            onChange={(e) => {
              fields.from !== ""
                ? setFields({ ...fields, [e.target.name]: e.target.value })
                : null;
            }}
          />
        </div>
        <div className="nav-item">
          <select
            className="custom-select custom-select-sm"
            value={fields.country}
            onChange={(e) => {
              setFields({ ...fields, [e.target.name]: e.target.value });
            }}
            name="country"
          >
            <option value="">Todos los paises</option>
            {[...new Set(hotelsData.map((e) => e.country))]
              .sort()
              .map((country, index) => (
                <option key={country + index} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>
        <div className="nav-item">
          <select
            className="custom-select custom-select-sm"
            value={fields.price}
            onChange={(e) => {
              setFields({ ...fields, [e.target.name]: e.target.value });
            }}
            name="price"
          >
            <option value="0">Cualquier precio</option>
            {[...new Set(hotelsData.map((e) => e.price))]
              .sort()
              .map((price, index) => (
                <option key={price + index} value={price}>
                  {"$".repeat(price)}
                </option>
              ))}
          </select>
        </div>
        <div className="nav-item">
          <select
            className="custom-select custom-select-sm"
            value={fields.rooms}
            onChange={(e) => {
              setFields({ ...fields, [e.target.name]: e.target.value });
            }}
            name="rooms"
          >
            <option value="0">Cualquier tamaño</option>
            <option value="10">Pequeño</option>
            <option value="20">Mediano</option>
            <option value="21">Grande</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            setFields({ price: "", rooms: "", country: "", from: "", to: "" });
          }}
        >
          Limpiar búsqueda
        </button>
      </nav>
    </>
  );
}
