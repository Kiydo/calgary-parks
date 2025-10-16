"use client"
import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }
);

export default function ParkMap() {
    
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, [])

    const shrinkAmount = Math.min(scrollY, 200);
    const height = 600 - shrinkAmount * 2;
    const bannerHeight = Math.max(height, 500);

    return (
        <MapContainer 
            center={[51.0447, -114.0719]} 
            zoom={11} 
            // className="h-[600px]"
            className="relative w-full overflow-hidden transition-all duration-300"
            style={{ height: `${bannerHeight}px` }}
        >
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