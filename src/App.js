import React, { useEffect, useState } from "react";
import LocationModal from "./components/Modal";
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useDispatch } from "react-redux";
import { setLocation } from "./store/locationSlice";
import MapWithLocationSelection from "./components/MapWithLocationSelection";
import SaveModal from "./components/SaveModal";
import AddressForm from "./components/AddressForm";

const Home = () => {
  const [locationEnabled, setLocationEnabled] = useState(false); // Track if location is enabled
  const [showModal, setShowModal] = useState(true); // Show modal initially
  const [location, setLocationState] = useState(null); // Store selected location
  const [showMap, setShowMap] = useState(false);
  const [save, setSave] = useState(false);
  const [addressSave, setAddressSave] = useState(true);
  const dispatch = useDispatch();

  // Enable location from browser geolocation
  const enableLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocationState({ lat: latitude, lng: longitude });
          setLocationEnabled(true);
          setShowModal(false); // Close modal after enabling location
          setSave(true);
          dispatch(setLocation({ lat: latitude, lng: longitude })); // Dispatch location state
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  };

  // Handle manual search
  const searchManually = () => {
    setShowMap(true);
    setShowModal(false); // Hide modal after manual search is selected
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="flex flex-col p-4">
      {save && (
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center font-bold text-3xl mb-9">
            This is Page after Location is Saved
          </h1>
          {addressSave && (
            <AddressForm location={location} setAddressSave={setAddressSave} />
          )}
          {!addressSave && (
            <div>
              <div className="text-5xl mb-7">Your Address has been Saved</div>
              <div
                className="text-xl border-2 border-red-600 bg-red-600 text-white p-2 rounded-lg text-center hover:bg-white hover:text-red-600 cursor-pointer"
                onClick={() => setAddressSave(true)}
              >
                Change Address
              </div>
            </div>
          )}
        </div>
      )}
      {showMap && (
        <div className="flex flex-col items-center">
          <MapWithLocationSelection
            location={location}
            setLocation={setLocationState}
            enableLocation={enableLocation}
          />
          <SaveModal
            setShowMap={setShowMap}
            setShowModal={setShowModal}
            setSave={setSave}
          />
        </div>
      )}
      <div className="flex flex-col items-center justify-center mb-7">
        {showModal && !locationEnabled && (
          <LocationModal
            onEnableLocation={enableLocation}
            onSearchManually={searchManually}
            setSave={setSave}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
