# Nearby Places Finder

## UI

## Features

- **Real-time Map Update**: Inputting new coordinates updates the map in real-time.
- **Location Details**: Shows the list of places below the map, each with a button to focus on the selected location.
- **Submit and Reset**: Allows users to submit new coordinates and reset the map and inputs to the initial state.
- **Responsive Design**: The interface is clean and user-friendly, with a responsive design for better usability.

## Technologies Used

- **React**: For building the user interface.
- **Google Maps API**: For displaying the map and markers.
- **Axios**: For making HTTP requests to fetch data.
- **NPM**: For package management.
- **TypeScript**: For type safety.
- **CSS**: For styling the components.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bedirhanbalci/nearby-places-frontend.git
   cd nearby-places-frontend
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the frontend directory and add your Google Maps API key:**

   ```env
   REACT_APP_MAPS_API_KEY = your-google-maps-api-key
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

## Usage

1. **Open the application in your browser (default: `http://localhost:3000`).**
2. **Enter the `longitude`, `latitude`, and `radius` values in the input fields.**
3. **Click the **Submit** button to view the map and nearby places.**
4. **The map will update in real-time to reflect the new coordinates.**
5. **Below the map, a list of places will be displayed. Click the **Show on Map** button next to a place to zoom in and highlight that specific location on the map.**
6. **Click the **Reset** button to clear the input fields, map, and place list.**

## Deployment

[https://bedirhanbalci.github.io/nearby-places-frontend/](https://bedirhanbalci.github.io/nearby-places-frontend/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, contact [bedirhanbalci@outlook.com](mailto:your-email@example.com).
