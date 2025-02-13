import { Link } from 'react-router-dom';
import cookImage from '../assets/images/cook.webp';
import pizzaImage from '../assets/images/pizza.jpg';

export default function HomePage(){
    return(
        <>
        <div className='hero-section'>
            <img src={cookImage}/>
        <h1>WELCOME TO DISHDELIGHTS</h1>
        <h3>Be the real cook and create your own recipes</h3>
        <button><Link to="favourites">Your Favourites</Link></button>
        </div>
        <section>
            <h1 className='bestseller-text'>BESTSELLERS</h1>
            <img className="bestsellers-img" src={pizzaImage}/>
            <img className="bestsellers-img" src={pizzaImage}/>
            <img className="bestsellers-img" src={pizzaImage}/>
            <img className="bestsellers-img" src={pizzaImage}/>
        </section>
        </>
    )
}