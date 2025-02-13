import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav>
                <p>
                    <Link to="">Home</Link>
                </p>
                <p>
                    <Link to="recipies">Recipies</Link>
                </p>
                <p>
                    <Link to="favourites">Favourites</Link>
                </p>
                <p>
                    <Link to="about">About</Link>
                </p>
                <p>
                    <Link to="contact">Contact</Link>
                </p>
            </nav>
        </header>
    )
}