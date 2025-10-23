import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      center: [-0.127758, 51.507351], //[long, lat]
      zoom: 14,
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100dvw", height: "100vh" }} />;
}
