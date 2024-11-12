import React, { useState } from 'react';
import './Homepage.css';
import image2 from '../assets/image2.png';  // Importing the image
import image3 from '../assets/image3.png';  // Importing the image
import image4 from '../assets/image4.png';  // Importing the image
import image5 from '../assets/image5.png';  // Importing the image

interface ServiceCard {
  title: string;
  subtitle?: string;
  image: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "I WANT TO MAKE",
    subtitle: "AN INQUIRY",
    image: image2
  },
  {
    title: "I WANT TO GIVE",
    subtitle: "FEEDBACK",
    image: image3
  },
  {
    title: "I WANT TO CHECK",
    subtitle: "ON MY PROJECT",
    image: image4
  },
  {
    title: "I WANT TO KNOW MORE",
    subtitle: "ABOUT HIGHLY SUCCEED",
    image: image5
  }
];

const Homepage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="homepage">
      <header className="welcome-header">
        <h1>Welcome, <span className="username">User.</span></h1>
        <p className="assistance-text">
          HOW CAN WE GIVE <span className="highlight">ASSISTANCE?</span>
        </p>
      </header>

      <div className="cards-container">
        {serviceCards.map((card, index) => (
          <div 
            key={index}
            className={`card ${hoveredIndex === index ? 'card-hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'card-shrink' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card-content">
              <img
                src={card.image}
                alt={card.title}
                className="card-image"
              />
              <div className="card-overlay">
                <h3>{card.title}</h3>
                {card.subtitle && (
                  <p>{card.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        © Highly Succeed Inc, 2019
      </footer>
      
    </div>
  );
};

export default Homepage;