import React from 'react';
import coupleImage from '../assets/images/couple.jpg';

export default function AboutPage() {
  return (
    <>
      <div className="about-container">
        {/* Image of the cooks or the people behind the company */}
        <img src={coupleImage} alt="Founders of DishDelights" className="about-image" />
        
        {/* Company Purpose */}
        <section className="about-description">
          <h1>About DishDelights</h1>
          <p>
            Hey there! We're a couple who loves to cook and share our passion for food. DishDelights started as a little idea over our dinner table — we wanted to create a space where anyone, from beginners to seasoned chefs, could find recipes that fit their tastes and preferences. Over time, our dream grew into a vibrant community of food lovers from around the world. Now, were here to inspire creativity in the kitchen, sharing easy-to-follow recipes and tips to help you make delicious meals at home. Whether you're cooking for the first time or experimenting with new flavors, we're all about making cooking fun and accessible for everyone!
          </p>
        </section>

        {/* Social Media Links */}
        <section className="social-media-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </section>
      </div>
    </>
  );
}
