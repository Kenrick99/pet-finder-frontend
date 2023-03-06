import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Welcome to Pet Finder!</h1>
        <p>Find your perfect furry friend today.</p>
        <Link to="/pets" className="btn btn-primary">
          See Available Pets
        </Link>
      </div>
      <div className="home-features">
        <div className="feature">
        {/* <a href="https://example.com/image.jpg">View image</a> */}

          <h2>Find Your Perfect Pet</h2>
          <p>Browse our selection of adoptable pets and find your perfect match.</p>
        </div>
        <div className="feature">
          {/* <img src={catImage} alt="Cat" /> */}
          <h2>Adopt a Pet</h2>
          <p>Give a pet a forever home and make a lifelong companion.</p>
        </div>
        <div className="feature">
          {/* <img src={birdImage} alt="Bird" /> */}
          <h2>Support Our Mission</h2>
          <p>Support animal welfare and help us care for our animals by making a donation.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
