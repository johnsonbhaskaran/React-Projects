import axios from "axios";

export default async function getDirections(startLong, startLat, endLong, endLat) {
  try {
    const TOKEN = import.meta.env.MAPBOX_TOKEN;
    const response = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startLong}%2C${startLat}%3B${endLong}%2C${endLat}?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${TOKEN}`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching routes: ", err);
  }
}
