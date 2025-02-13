import cookImage from '../assets/images/cook.webp';

export default function HomePage(){
    return(
        <>
        <img src={cookImage}/>
        <h3>Be the real cook and create your own recipes</h3>
        <button>Your Favourites</button>
        </>
    )
}