import React from 'react';
import '../index.css';

const AnimalDetails = ({ animal }) => {
    if (!animal) {
        return <div>No animal details available.</div>;
      }
    
      const { name, locations, characteristics } = animal;
    
      return (
        <div className="animal-container">
          <p className="animal-name"><span className="label">Name: </span> {name}</p>
          {locations && locations.length > 0 && <p className="location"><span className="label">Location: </span> {locations.join(', ')}</p>}
          <div className="characteristics">
            <p className="label">Characteristics</p>
            {characteristics ? (
            <ul>
              <li>Prey: {characteristics.prey}</li>
              <li>Population: {characteristics.population}</li>
              <li>Group: {characteristics.group}</li>
              <li>Weight: {characteristics.weight}</li>
            </ul>
            ): (
                <p>No characteristics available.</p>
              )
        }
          </div>
        </div>
      );
    };

export default AnimalDetails;