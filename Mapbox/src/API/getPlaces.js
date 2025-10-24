import axios from "axios";

export default async function getPlaces(query) {
  try {
    const TOKEN = import.meta.env.MAPBOX_TOKEN;
    const response = await axios.get(
      `https://api.mapbox.com/search/geocode/v6/forward?q=${query}&country=in&autocomplete=true&access_token=${TOKEN}`
    );
    return response.data.features;
  } catch (err) {
    console.error("There was error fetching places: ", err);
    return [];
  }
}
