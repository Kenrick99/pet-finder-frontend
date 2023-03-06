import React, { useState, useEffect } from 'react';

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('https://dorothy-sinatra-petfinder.onrender.com/pets')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://kenrick-sinatra.onrender.com/pets/${id}`, {
        method: 'DELETE',
      });
      setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pets-container">
      <h1>List of Pets</h1>
      <div className="pet-grid">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            {pet.img_url && <img className="pet-image" src={pet.img_url} alt={pet.name} />}
            <h2 className="pet-name">{pet.name}</h2>
            <p className="pet-info">Breed: {pet.breed}</p>
            <p className="pet-info">Age: {pet.age}</p>
            <button onClick={() => handleDelete(pet.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pets;