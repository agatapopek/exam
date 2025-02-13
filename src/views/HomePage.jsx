import cookImage from '../assets/images/cook.webp';

export default function HomePage(){
    return(
        <>
        <div className='hero-section'>
            <img src={cookImage}/>
        <h1>welcome to DishDelights</h1>
        <h3>Be the real cook and create your own recipes</h3>
        <button>Your Favourites</button>
        </div>
        <section>
            
        </section>
        </>
    )
}