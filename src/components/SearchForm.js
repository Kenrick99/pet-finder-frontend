import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchForm() {
  const [query, setQuery] = useState('');
  const [pets, setPets] = useState([]);
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
          setPets(data);
          setError(null);
          alert(`We found ${data.length} pets for your search query!`);
        } else {
          setPets([]);
          setError('No pets found for this search query.');
          alert('No pets found for your search query.');
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
        <input type="text" value={query} onChange={handleQueryChange} className="search-input" placeholder="Search for pets" />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </form>
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      {/* {pets.length > 0 && (
        <div className="pet-grid">
          {pets.map((pet) => (
            <img className="pet-image" key={pet.id} src={`${pet.img_url}?${Math.random()}`} alt={pet.name} />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default SearchForm;