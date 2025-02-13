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
                        <p>Home</p>
                        <p>Recipies</p>
                        <p>Favourites</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                </div>
                </>
    )
}