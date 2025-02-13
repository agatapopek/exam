import { Link } from 'react-router-dom';
import cookImage from '../assets/images/cook.webp';
import pizzaImage from '../assets/images/pizza.jpg';
import soupImage from '../assets/images/soup.jpg';
import macImage from '../assets/images/macandcheese.jpg';
import carbonaraImage from '../assets/images/carbonara.jpg';

export default function HomePage(){
    return(
        <>
        <div className='hero-section'>
            <img src={cookImage}/>
        <h1>Unleash Your Culinary Creativity with DishDelights!</h1>
        <h3>Explore a world of delicious recipes or create your own with our easy-to-use platform. Whether you're an experienced chef or a beginner, we provide the tools and inspiration to make every meal memorable!</h3>
        <button><Link to="favourites" className='urfav'>Your recipes</Link></button>
        </div>
        <section>
            <h1 className='bestseller-text'>BESTSELLERS</h1>
            <Link to="recipies"><img className="bestsellers-img" src={pizzaImage}/></Link>
            <Link to="recipies"><img className="bestsellers-img" src={soupImage}/></Link>
            <Link to="recipies"><img className="bestsellers-img" src={macImage}/></Link>
            <Link to="recipies"><img className="bestsellers-img" src={carbonaraImage}/></Link>
        </section>
        </>
    )
}