import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.MAPBOX_TOKEN;

export default function Map() {
  const mapRef = useRef(null);

  const start = [78.11834, 9.918035];
  const end = [78.839685, 10.157368];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      center: start,
      zoom: 9,
    });

    map.on("load", () => {
      new mapboxgl.Marker({ color: "red" }).setLngLat(start).addTo(map);
    });

    map.on("load", () => {
      new mapboxgl.Marker({ color: "green" }).setLngLat(end).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [start, end]);

  return <div ref={mapRef} style={{ width: "100dvw", height: "100vh" }} />;
}
