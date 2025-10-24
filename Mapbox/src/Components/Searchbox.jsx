import { useState } from "react";
import getPlaces from "../API/getPlaces";

const Searchbox = () => {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [visibility, setVisibility] = useState(false);

  const handleSearchQuery = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!query) {
      setPlaces([]);
      setVisibility(false);
      return;
    }
    try {
      const result = await getPlaces(value);
      setPlaces(result);
      setVisibility(true);
      console.log(result);
    } catch (err) {
      console.log("Something went wrong!", err);
    }
    setQuery(e.target.value);
  };

  const handlePlaceClick = (place) => {
    setQuery(place.properties.name);
    setPlaces([]);
    setVisibility(false);
  };

  console.log(places, visibility);

  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "40px",
      }}
    >
      <input
        style={{ width: "100%" }}
        type='text'
        value={query}
        onChange={handleSearchQuery}
        placeholder='Search for a place'
      />
      {visibility && places.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            textAlign: "left",
            border: "1px solid",
            margin: 0,
            padding: 0,
            zIndex: 1000,
          }}
        >
          {places.map((place) => (
            <li
              key={place.id}
              style={{ padding: "8px", cursor: "pointer" }}
              onClick={() => handlePlaceClick(place)}
            >
              {place.properties.name + " " + place.properties.full_address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Searchbox;
