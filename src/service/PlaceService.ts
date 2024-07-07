import axios from "axios";
import { validateInputs } from "../utils/Validation";

interface Place {}

class PlaceService {
  async fetchPlaces(
    longitude: string,
    latitude: string,
    radius: string,
    setError: (error: string) => void,
    setPlaces: (places: Place[]) => void,
    setSelectedPlace: (place: Place | null) => void
  ) {
    const validationError = validateInputs(longitude, latitude, radius);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    try {
      const response = await axios.get("http://localhost:8070/api/place", {
        params: { longitude, latitude, radius },
      });

      setPlaces(response.data.nearbyPlaceList);
      setSelectedPlace(null);
    } catch (err) {
      setError("Failed to fetch places. Please try again later.");
    }
  }
}

export default new PlaceService();
