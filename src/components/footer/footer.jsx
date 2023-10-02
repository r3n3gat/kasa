import './footer.scss';
import footer_logo from '../../assets/LOGOFooter.png';

export default function Footer() {
    const currentYear = new Date().getFullYear(); /* -- mise a jour auto de l'année en cours -- */

    return (
        <footer className='footer'>
            <img src={footer_logo} alt= "Logo Footer de Kasa" />
            <p className='footer_copyright'>© {currentYear} Kasa. All rights reserved.</p>
        </footer>
    );
}
