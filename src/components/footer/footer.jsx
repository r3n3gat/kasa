import './footer.scss'
import footer_logo from '../../assets/LOGO_footer.png'

export default function Footer() {
    return (
    <footer className='footer'>
    <img src={footer_logo} alt= "logo Footer de Kasa"/>
    <p className='footer_copyright'>© 2020 Kasa. All rights reserved.</p>
    </footer>
    )
}