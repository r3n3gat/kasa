import './header.scss'
import Logo from "../../assets/LOGO.png"
import {Link} from "react-router-dom"


export default function Header() {
    return (
        <header className='header'>
                <Link to="/">
        <img src={Logo} alt="logo de Kasa, location d'appartement" />
        </Link>
        <nav>
        <ul>
            <li className="nav">Accueil</li>
            <li className="nav">A propos</li>
            <li className="nav">
            <Link to="/">Accueil</Link>
            </li>
            <li className="nav">
            <Link to="/about">A propos</Link>
            </li>
        </ul>
        </nav>
        </header>
    )
}