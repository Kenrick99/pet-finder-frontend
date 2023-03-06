import React, { useState } from 'react';

function AddPetForm({ onAddPet }) {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPet = { name, breed, age, img_url: imgUrl };
//  adds a pets but the pets doesnt persists.
    fetch('https://kenrick-sinatra.onrender.com/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPet)
    })
    .then(response => response.json())
    .then(data => {
      onAddPet(data);
      setName('');
      setBreed('');
      setAge('');
      setImgUrl('');
    })
    .catch(error => console.error(error));
  };

  return (
    <form className="add-pet-form" onSubmit={handleSubmit}>
      <h2>Add a New Pet</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={(event) => setBreed(event.target.value)} required />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={imgUrl} onChange={(event) => setImgUrl(event.target.value)} />
      </label>
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPetForm;