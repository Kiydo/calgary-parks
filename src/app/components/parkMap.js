"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function ParkMap() {
    return (
        <MapContainer center={[51.0447, -114.0719]} zoom={11} className="h-[600px]">
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.0447, -114.0719]}>
                <Popup>Calgary Test Marker</Popup>
            </Marker>
        </MapContainer>
    );
}