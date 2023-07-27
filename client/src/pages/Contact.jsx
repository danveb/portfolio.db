import React, { useRef, useState, useEffect } from "react"; 
import mapboxgl from "!mapbox-gl" // eslint-disable-line import/no-webpack-loader-syntax
import "../styles/Contact.css"; 
import { Button } from "../components";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API; 

export default function Contact() {
  // initialize mapbox state/ref
  const mapContainer = useRef(null); 
  const map = useRef(null); 
  const [lat, setLat] = useState(41.8781);
  const [lng, setLng] = useState(-87.6298); 
  const [zoom, setZoom] = useState(11); 

  // useEffect
  useEffect(() => {
    if(map.current) return; // initialize map just once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11", 
      center: [lng, lat], 
      zoom: zoom, 
    }); 

    if(!map.current) return; // wait for map to initialize 
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4)); 
      setZoom(map.current.getZoom().toFixed(2)); 
    });
  }, [lat, lng, zoom]); 

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__main">
          <div className="contact__title">
            <h1>send me a note<span className="dot--green">.</span> 📝</h1>
          </div>
          <div className="breakline"></div>
          <div className="contact__intro">
            <p>I'm in the Chicago area, but open to discussing new opportunities to work together regardless of location. Feel free to send a note and I'll do my best to get back to you. </p>
          </div>
          <Button title="let's email" url="mailto:danibae91@gmail.com?subject=👨‍💻  hey Danny, let's work together!" />
        </div>
        <div className="sidebar">
        Lng: {lng} | Lat: {lat}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  )
}