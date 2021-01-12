import React, { useContext } from "react";
import { hotelsContext, hotelsData } from "../context/DataContext";
import Card from "./Card";

export function Error(props) {
  return (
    <>
      <div className="container">
        <div
          className="alert alert-danger text-center font-weight-bold mt-5"
          role="alert"
        >
          {props.message}
        </div>
      </div>
    </>
  );
}

export default function Container() {
  const {
    fields: { price, rooms, country, from, to }
  } = useContext(hotelsContext);

  let hotelesFiltrados = [];

  hotelsData.forEach((hotel) => {
    if (country === "" ? true : country === hotel.country) {
      if (
        Number(price) === 0 || Number(price) === hotel.price
          ? true
          : Number(price) === 1 || Number(price) === hotel.price
          ? Number(price) === 2 || Number(price) === hotel.price
          : Number(price) === 3 || Number(price) === hotel.price
          ? Number(price) === 4 || Number(price) === hotel.price
          : 0
      ) {
        if (
          Number(rooms) === 0
            ? true
            : rooms <= 10
            ? hotel.rooms <= 10
            : rooms >= 11 && rooms <= 20
            ? hotel.rooms >= 11 && hotel.rooms <= 20
            : rooms >= 21
            ? hotel.rooms >= 21
            : 0
        ) {
          let msFrom = from ? new Date(from).valueOf() + 86400000 : null;
          let msTo = to ? new Date(to).valueOf() + 86400000 : null;
          if (msFrom ? msFrom >= hotel.availabilityFrom : true) {
            if (msTo ? msTo <= hotel.availabilityTo : true) {
              hotelesFiltrados.push(hotel);
            }
          }
        }
      }
    }
  });

  const cards = hotelesFiltrados.map((hotel, index) => {
    return <Card data={hotel} key={index} />;
  });

  return (
    <div className="container-fluid d-flex">
      {new Date(from).valueOf() > new Date(to).valueOf() ? (
        <Error message="No se permite ingresar fecha de salida menor a la fecha de entrada, intente de nuevo." />
      ) : hotelesFiltrados.length !== 0 ? (
        cards
      ) : (
        <Error message="No se encontraron resultados, intente con otra búsqueda" />
      )}
    </div>
  );
}
