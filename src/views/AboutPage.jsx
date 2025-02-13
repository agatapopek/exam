import React from 'react';
import coupleImage from '../assets/images/couple.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function AboutPage() {
  return (
    <>
      <div className="about-container">
        <img src={coupleImage} alt="Founders of DishDelights" className="about-image" />
        
        <section className="about-description">
          <h1>About DishDelights</h1>
          <p>
            Hey there! We're a couple who loves to cook and share our passion for food. DishDelights started as a little idea over our dinner table — we wanted to create a space where anyone, from beginners to seasoned chefs, could find recipes that fit their tastes and preferences. Over time, our dream grew into a vibrant community of food lovers from around the world. Now, were here to inspire creativity in the kitchen, sharing easy-to-follow recipes and tips to help you make delicious meals at home. Whether you're cooking for the first time or experimenting with new flavors, we're all about making cooking fun and accessible for everyone!
          </p>
        </section>

        <div className="social-links" style={{display: "flex", flexDirection: "row", gap:"20px", justifyContent: "center", margin: "20px"}}>
        <a href='https://www.instagram.com/hmm__bobby_everyday/'><InstagramIcon fontSize="large" sx={{ color: "#004d40"}}/></a>
        <a href='https://www.facebook.com/profile.php?id=100088718410451'><FacebookIcon fontSize="large" sx={{ color: "#004d40"}}/></a>
        <a href='https://www.youtube.com/@Tejstyburgir'><YouTubeIcon fontSize="large" sx={{ color: "#004d40"}}/></a>
        </div>
      </div>
    </>
  );
}
