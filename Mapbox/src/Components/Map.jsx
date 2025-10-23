import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      center: [-0.127758, 51.507351], //[long, lat]
      zoom: 14,
    });

    map.on("load", () => {
      new mapboxgl.Marker().setLngLat([-0.127758, 51.507351]).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100dvw", height: "100vh" }} />;
}
