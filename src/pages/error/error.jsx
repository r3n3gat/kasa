import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./error.scss"
import {Link} from 'react-router-dom'


export default function Error() {
	return (
		<div>
            <Header />
            <h1 className="error">404</h1>
            <p className="error-text">Oups! La page que vous recherchez n'existe pas</p>
            <Link className="error-back" to="/">Retourner à la page d'accueil</Link>
            <Footer />
		</div>
	)
}