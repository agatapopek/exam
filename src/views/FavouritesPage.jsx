import pizzaImage from '../assets/images/pizza.jpg';
import soupImage from '../assets/images/soup.jpg';
import macImage from '../assets/images/macandcheese.jpg';
import carbonaraImage from '../assets/images/carbonara.jpg';
import FavouriteList from "../components/FavouriteList";
import { Link } from 'react-router-dom';

export default function FavouritesPage(){
    return(
        <>
       <FavouriteList/>
       <section>
       <h1 className='bestseller-text'>GET INSPIRED</h1>
       <Link to="recipies"><img className="bestsellers-img" src={pizzaImage}/></Link>
            <Link to="recipies"><img className="bestsellers-img" src={soupImage}/></Link>
            <Link to="recipies"><img className="bestsellers-img" src={macImage}/></Link>
            <Link to="recipies"><img className="bestsellers-img" src={carbonaraImage}/></Link>
        </section>
       </>
    )
}