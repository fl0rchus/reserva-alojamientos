import React, { useContext } from "react";
import { hotelsContext } from "../context/DataContext";

export default function Hero() {
  const {
    fields: { price, rooms, country, from, to }
  } = useContext(hotelsContext);
  return (
    <div className="jumbotron">
      <h1 className="h1">Reserva de Alojamientos</h1>
      <h2 className="h6">
        {country !== "" ||
        rooms !== "" ||
        price !== "" ||
        from !== "" ||
        to !== ""
          ? "Búsqueda para hoteles"
          : ""}{" "}
        {price !== "" ? "de precio " + "$".repeat(price) : ""}{" "}
        {from !== ""
          ? "desde el " +
            new Date(from).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC"
            })
          : ""}{" "}
        {to !== ""
          ? "hasta el " +
            new Date(to).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC"
            })
          : ""}{" "}
        {country !== "" ? "en " + country : ""}
      </h2>
    </div>
  );
}
