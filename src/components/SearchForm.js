import React, { useState } from 'react';


function SearchForm() {
  const [query, setQuery] = useState('');
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(`https://kenrick-sinatra.onrender.com/pets/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setPet(data[0]);
          setError(null);
        } else {
          setPet(null);
          setError('No pets found for this search query.');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred while searching for pets. Please try again later.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input type="text" value={query} onChange={handleQueryChange} className="search-input" />
        <button type="submit" className="search-button">Search</button>
      </form>
      {error && (
        <p className="error-message">{error}</p>
      )}
      {pet && (
        <div className="pet-card" key={pet.id}>
        {pet.img_url && <img className="pet-image" src={pet.img_url} alt={pet.name} />}
        <h2 className="pet-name">{pet.name}</h2>
        <p className="pet-info">Breed: {pet.breed}</p>
        <p className="pet-info">Age: {pet.age}</p>
        </div>
      )}
    </div>
  );
}

export default SearchForm;