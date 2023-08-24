import { useRef, useState, useEffect } from "react"; 
// @ts-ignore
import mapboxgl, { Map } from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API || ""; // added fallback for accessToken

export default function MapboxGL() {
  // initialize mapbox state/ref
  const mapContainer = useRef<HTMLDivElement | null>(null); 
  const map = useRef<Map | null>(null); 
  const [lat, setLat] = useState<number>(41.8781);
  const [lng, setLng] = useState<number>(-87.6298); 
  const [zoom, setZoom] = useState<number>(11); 

  // useEffect
  useEffect(() => {
    if(map.current) return; // initialize map just once
    
    const mapOptions: mapboxgl.MapboxOptions = {
      container: mapContainer.current!, 
      style: "mapbox://styles/mapbox/dark-v11", 
      center: [lng, lat], 
      zoom: zoom, 
    }; 

    map.current = new mapboxgl.Map(mapOptions); 

    if(!map.current) return; // wait for map to initialize 

    map.current.on("move", () => {
      if (map.current) {
        const mapCenter = map.current.getCenter();
        const mapZoom = map.current.getZoom();
    
        if (typeof mapCenter.lng === "number" && typeof mapCenter.lat === "number") {
          setLng(parseFloat(mapCenter.lng.toFixed(4)));
          setLat(parseFloat(mapCenter.lat.toFixed(4)));
        }
    
        if (typeof mapZoom === "number") {
          setZoom(parseFloat(mapZoom.toFixed(2))); // Parse the string to a number
        }
      }
    });
    
  }, [lat, lng, zoom]); 

  return (
    <>
      <div className="sidebar">
        Lng: {lng} | Lat: {lat}
      </div>
      <div ref={mapContainer} className="map-container" />
    </>
  )
}