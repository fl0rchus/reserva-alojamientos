import React, { useState } from "react";
import { hotelsContext } from "../context/DataContext";
import Filters from "../components/Filters";
import Container from "../components/Container";
import Hero from "../components/Hero";
import "../styles.css";

export default function App() {
  const [fields, setFields] = useState({
    price: "",
    rooms: "",
    country: "",
    from: "",
    to: ""
  });

  return (
    <hotelsContext.Provider
      value={{
        fields,
        setFields
      }}
    >
      <Hero />
      <Filters />
      <Container />
    </hotelsContext.Provider>
  );
}
