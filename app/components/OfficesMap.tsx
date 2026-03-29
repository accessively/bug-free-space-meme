"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const indigoPinIcon = L.divIcon({
  className: "",
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -32],
  html: `
    <div style="position:relative;width:24px;height:36px;">
      <div style="position:absolute;left:0;top:0;width:24px;height:24px;background:#4f46e5;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 3px 8px rgba(0,0,0,0.28);"></div>
      <div style="position:absolute;left:7px;top:7px;width:10px;height:10px;background:#ffffff;border-radius:9999px;"></div>
    </div>
  `,
});

const offices = [
  {
    id: "cdo",
    city: "Cagayan de Oro",
    label: "Main Operations Hub",
    lat: 8.4542,
    lng: 124.6319,
  },
  {
    id: "launion",
    city: "La Union",
    label: "Support Office",
    lat: 16.6159,
    lng: 120.3189,
  },
  {
    id: "muntinlupa",
    city: "Muntinlupa",
    label: "Administrative Center",
    lat: 14.4081,
    lng: 121.0415,
  },
];

export default function OfficesMap() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-indigo-900/30" style={{ height: "420px" }}>
      <MapContainer
        center={[12.0, 122.5]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
        />
        {offices.map((office) => (
          <Marker key={office.id} position={[office.lat, office.lng]} icon={indigoPinIcon}>
            <Popup>
              <div className="text-center">
                <p className="font-bold text-slate-900">{office.city}</p>
                <p className="text-slate-600 text-sm">{office.label}</p>
                <p className="text-slate-500 text-xs">Philippines</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
