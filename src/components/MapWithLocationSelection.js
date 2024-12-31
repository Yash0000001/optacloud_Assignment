import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SiGooglemaps } from "react-icons/si";

// Custom hook to handle map events like click and location pin drag
const LocationSelector = ({ setLocation, currentLocation }) => {
  return (
    <Marker
      position={currentLocation || { lat: 51.505, lng: -0.09 }} // Default position if no location
      draggable
      eventHandlers={{
        dragend: (e) => {
          setLocation({
            lat: e.target.getLatLng().lat,
            lng: e.target.getLatLng().lng,
          });
        },
      }}
    >
      <SiGooglemaps />
      <Popup>
        <span>Drag me to select location</span>
      </Popup>
    </Marker>
  );
};

const MapWithLocationSelection = ({
  location,
  setLocation,
  enableLocation,
}) => {
  // Handle Locate Me Button
  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div className="w-full md:w-3/4 lg:w-3/4 flex flex-col items-center justify-center">
      <MapContainer
        center={location || { lat: 51.505, lng: -0.09 }} // Default center if no location
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationSelector
          setLocation={setLocation}
          currentLocation={location}
        />
      </MapContainer>

      <button
        onClick={locateMe}
        className="text-lg border-2 border-red-600 p-2 text-white bg-red-600 hover:text-red-600 hover:bg-white rounded-lg mb-4 "
      >
        Locate Me
      </button>

      {/* <button onClick={enableLocation}>Enable Location</button> */}
    </div>
  );
};

export default MapWithLocationSelection;
