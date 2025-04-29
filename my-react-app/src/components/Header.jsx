import "./Header.css";
function Header(){

    return(
        <>
        <header className="header">
            <div className="container">
                <h1>Guvi College</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#about">About us</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#faculty">Fauculty</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        
        </>
        

        
        
    );

}
export default Header