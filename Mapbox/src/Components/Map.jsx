import mapboxgl from "mapbox-gl";
import { useRef } from "react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function Map() {
  const mapRef = useRef(null);
}
