import "./card.scss";
import {Link} from 'react-router-dom'

export default function Card({id, title, cover}) {
    return (
        <Link to={`/accomodation/${id}`} className="card">
            <div className='overlay'></div>
            <h3>{title}</h3>
            <img src={cover}alt={title}/>

        </Link>
    )
    }