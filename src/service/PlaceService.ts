import axios from "axios";
import { validateInputs } from "../utils/Validation";
import { PlaceResponse } from "../model/PlaceResponse";

class PlaceService {
  async fetchPlaces(
    longitude: string,
    latitude: string,
    radius: string,
    setError: (error: string) => void,
    setPlaces: (places: PlaceResponse[]) => void,
    setSelectedPlace: (place: PlaceResponse | null) => void
  ) {
    const validationError = validateInputs(longitude, latitude, radius);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    try {
      const response = await axios.get(
        "https://nearby-places-backend.onrender.com/api/place",
        {
          params: { longitude, latitude, radius },
        }
      );

      setPlaces(response.data.nearbyPlaceList);
      setSelectedPlace(null);
    } catch (err) {
      setError("Failed to fetch places. Please try again later.");
    }
  }
}

const placeService = new PlaceService();
export { placeService };
