import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="navigation">
            <nav className="nav-links">
                <Link className="nav-link" to="">Home</Link>
                <Link className="nav-link" to="recipies">Recipies</Link>
                <Link className="nav-link" to="favourites">Favourites</Link>
                <Link className="nav-link" to="about">About</Link>
                <Link className="nav-link" to="contact">Contact</Link>
            </nav>
        </header>
    )
}