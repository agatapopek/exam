import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} DishDelights. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <p ><Link to="">Home</Link></p>
                        <p><Link to="recipies">Recipes</Link></p>
                        <p><Link to="favourites">Favourites</Link></p>
                        <p><Link to="about">About</Link></p>
                        <p><Link to="contact">Contact</Link></p>
                    </div>
                </div>
                </>
    )
}