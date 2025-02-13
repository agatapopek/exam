import { Link } from "react-router-dom";
import { useState } from "react"; // Importing useState to manage the menu state

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the isOpen state
    };

    return (
        <header className="navigation">
            <div className="menu-toggle" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link className="nav-link" to="">Home</Link>
                <Link className="nav-link" to="recipies">Recipes</Link>
                <Link className="nav-link" to="favourites">Favourites</Link>
                <Link className="nav-link" to="about">About</Link>
                <Link className="nav-link" to="contact">Contact</Link>
            </nav>
        </header>
    );
}
