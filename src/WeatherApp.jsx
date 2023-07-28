import { useState } from "react";

export const WeatherApp = () => {
  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const urlBase = "https://api.openweathermap.org/data/3.0/onecall";
  const API_KEY = "87abd6e7158625480e8423dc9a3d4f11";

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(
        `${urlBase}?lat={lat&lon=lon={lon}&appid={API_KEY}}`
      );
    } catch (error) {}
  };

  return (
    <div className="container">
      <h1>App Weather | Aplicación de clima</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambioCiudad} />
      </form>
      <button type="submit">BUSCAR</button>
    </div>
  );
};
