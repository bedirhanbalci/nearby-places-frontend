import React, { useRef, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import { PlaceResponse } from "./model/PlaceResponse";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { placeService } from "./service/PlaceService";

const containerStyle = {
  width: "800px",
  height: "600px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const App: React.FC = () => {
  const [longitude, setLongitude] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [radius, setRadius] = useState<string>("");
  const [places, setPlaces] = useState<PlaceResponse[]>([]);
  const [error, setError] = useState<string>("");
  const [selectedPlace, setSelectedPlace] = useState<PlaceResponse | null>(
    null
  );

  const mapRef = useRef<any>(null);
  const titleRef = useRef<any>(null);

  const initialCenter = {
    lat: latitude ? parseFloat(latitude) : 41.015137,
    lng: longitude ? parseFloat(longitude) : 28.97953,
  };

  const resetFields = () => {
    setLongitude("");
    setLatitude("");
    setRadius("");
    setPlaces([]);
    setError("");
    setSelectedPlace(null);
  };

  const handlePlaceClick = (place: PlaceResponse) => {
    setSelectedPlace(place);
    scrollToTitle();
  };

  const scrollToTitle = () => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-container">
      <h1 ref={titleRef}>Nearby Places Finder</h1>
      <div className="input-container">
        <TextInput
          value={longitude}
          onChange={value => setLongitude(value)}
          placeholder="Longitude"
        />
        <TextInput
          value={latitude}
          onChange={value => setLatitude(value)}
          placeholder="Latitude"
        />

        <TextInput
          value={radius}
          onChange={value => setRadius(value)}
          placeholder="Radius"
        />

        <button
          onClick={() => {
            placeService.fetchPlaces(
              longitude,
              latitude,
              radius,
              setError,
              setPlaces,
              setSelectedPlace
            );
          }}
        >
          Search
        </button>
        <button onClick={resetFields}>Reset</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div ref={mapRef}>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY as string}
        >
          <GoogleMap
            mapContainerClassName="google-map-container"
            mapContainerStyle={containerStyle}
            center={
              selectedPlace
                ? { lat: selectedPlace.latitude, lng: selectedPlace.longitude }
                : initialCenter
            }
            zoom={selectedPlace ? 15 : 12}
          >
            {(selectedPlace ? [selectedPlace] : places).map(place => (
              <Marker
                key={place.id}
                position={{ lat: place.latitude, lng: place.longitude }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
      <ul className="places-list">
        {places.map(place => (
          <li key={place.id}>
            <span>{place.name}</span>
            <button onClick={() => handlePlaceClick(place)}>Show on map</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
