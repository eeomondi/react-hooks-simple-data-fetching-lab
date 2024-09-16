// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  // State to hold the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to manage loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch the dog image
    const fetchDogImage = async () => {
      try {
        // Send fetch request to the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        // Parse the JSON response
        const data = await response.json();
        // Update state with the image URL
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        // Set loading to false once the fetch is complete
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchDogImage();
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Render the component
  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching data
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Show the fetched dog image
      )}
    </div>
  );
};

export default App;
