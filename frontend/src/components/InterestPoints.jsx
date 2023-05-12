import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import styles from "./InterestPoints.module.css";
import "leaflet/dist/leaflet.css";

export default function InterestPoints() {
  const positionCenter = [48.86, 2.3522];
  const markers = [
    {
      position: [70, 102.3522],
    },
    {
      position: [50.85, 2.3522],
    },
  ];

  const customIcon = new Icon({
    iconUrl: "../src/assets/images/point-dinteret.png",
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      className={styles.map}
      center={positionCenter}
      zoom={0}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.position} icon={customIcon} />
      ))}
    </MapContainer>
  );
}
