export const isNumeric = (value: string): boolean => {
  return /^-?\d+(\.\d+)?$/.test(value);
};

export const validateInputs = (
  longitude: string,
  latitude: string,
  radius: string
): string => {
  if (!longitude || !latitude || !radius) {
    return "All fields are required";
  }
  if (!isNumeric(longitude) || !isNumeric(latitude) || !isNumeric(radius)) {
    return "Longitude, Latitude, and Radius must be numeric";
  }
  if (parseFloat(radius) <= 0) {
    return "Radius must be a positive number";
  }
  return "";
};
