import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import AnimalDetails from './Components/AnimalDetails';
import './App.css';

function App() {
  const [animalDetails, setAnimalDetails] = useState(null);
  const [error, setError] = useState(null);

  const searchAnimal = async (searchTerm) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${searchTerm}`, {
        headers: {'X-Api-Key': 'vEBlX4sKNZmMPM7ExYUm/A==N4XBrfPVg06oGNVV'}
      });
      const data = await response.json();
      setAnimalDetails(data);
    } catch (error) {
      setError('Error fetching animal details. Please try again later.');
    }
  };

  return (
    <div className="container">
      <SearchBar onSearch={searchAnimal} />
      <h1 className="title">Animal Details</h1>
      {error && <p className="error-message">{error}</p>}
      {animalDetails && animalDetails.map((animal, index) => (
        <AnimalDetails key={index} animal={animal} />
      ))}
    </div>
  );
}

export default App;
