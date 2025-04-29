import '../styles/Navbar.css';
import '../styles/DropdownMenu.scss';
import Card from './Card';

import steamLogo from '../assets/images/Steam.png';
import eaLogo from '../assets/images/EA.webp';
import instagramLogo from '../assets/images/Instagram.png';
import spotifyLogo from '../assets/images/Spotify.png';
import linkedinLogo from '../assets/images/Linkedin.png';

const DropdownMenu = () => {
    return (
        <nav className="dropdown-menu">
            <ol>
                <li className="dropdown-menu-item"><a href="/">Home</a></li>
                <li className="dropdown-menu-item"><a href="/about">About</a></li>
                <li className="dropdown-menu-item"><a href="social">Social</a>
                    <ol className="dropdown-menu-sub-item">
                        <div className="dropdown-menu-cards">
                            <Card
                                logo={instagramLogo}
                                title="Instagram"
                                color="rgba(141,12,86,255)"
                                link="https://www.instagram.com/ozanceng/"
                                text=""
                            />
                            <Card
                                logo={steamLogo}
                                title="Steam"
                                color="rgba(17,50,93,255)"
                                link="https://steamcommunity.com/id/ozzy1327"
                                text=""
                            />
                            <Card
                                logo={eaLogo}
                                title="EA"
                                color="rgba(182,56,78,255)"
                                link=""
                                text="/ozy360"
                            />
                            <Card
                                logo={spotifyLogo}
                                title="Spotify"
                                color="rgba(18, 115, 52, 255)"
                                link="https://open.spotify.com/user/d1r6o86wwap0c357fvi0801o3?si=6037135b13824e1d"
                                text=""
                                ></Card>
                            <Card
                                logo={linkedinLogo}
                                title="LinkedIn"
                                color="rgba(46, 123, 160, 255)"
                                link="https://www.linkedin.com/in/ozan-cengiz/"
                                text=""
                            ></Card>
                        </div>
                        
                    </ol>
                    </li>
                <li className="dropdown-menu-item"><a href="/projects">Projects</a></li>

            </ol>
        </nav>
        /*<nav className="navbar">
            <div className="navbar-logo">
                <h1>Welcome</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="cards">Cards</a></li>
                <li><a href="accounts">Accounts</a></li>
            </ul>
            <li className="dropdown-menu-sub-item"><a href="instagram">Instagram</a></li>
                        <li className="dropdown-menu-sub-item"><a href="steam">Steam</a></li>
                        <li className="dropdown-menu-sub-item"><a href="ea">EA</a></li>
        </nav>*/
    );
};


export default DropdownMenu;