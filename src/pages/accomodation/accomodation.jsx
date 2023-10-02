import './accomodation.scss'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Collapse from "../../components/collapse/collapse"
import datas from "../../datas/datas"
import { useParams } from "react-router-dom"
import ActiveStar from "../../assets/star-active.png"
import InactiveStar from "../../assets/star-inactive.png"
import { useEffect, useState } from "react"
import Slider from "../../components/carrousel/carrousel"

export default function Accomodation() {
	
	const [imageSlider, setImageSlider] = useState([])
	const idAccomodation = useParams('id').id
	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation)
	const rating = dataCurrentAccomodation[0].rating
	const name = dataCurrentAccomodation[0].host.name.split(' ')

	useEffect(() => {
		const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);


	return (
		<div>
        	<Header />
			<main className="accomodation">
			<Slider imageSlider={imageSlider}/>
			<div className="accomodation_title">
				<h1>{dataCurrentAccomodation[0].title}</h1>
				<div className="accomodation_host">
					<span>{name[0]}</span>
					<span>{name[1]}</span>
					<img className="picture" src={dataCurrentAccomodation[0].host.picture} alt="propriétaire de l'appartement" />
            	</div>
			</div>
			<p>{dataCurrentAccomodation[0].location}</p>
			<div className="tag-container">
				<div>
				{dataCurrentAccomodation[0].tags.map((tag, index) => {
				return (
					<button className="tag" key={index}>{tag}</button>
					)
				})}
			</div>
			<div className="stars"> {Array.from({ length: 5 }).map((_, index) => (
             <img
             key={index}
             src={index < rating ? ActiveStar : InactiveStar}
             alt="star"/>
             ))}
			 </div>
			</div>
			<div className="accomodation-collapse">
			<div className="accomodation-collapse_item">
			<Collapse title={"Description"} content={dataCurrentAccomodation[0].description}/>
			</div>
			<div className="accomodation-collapse_item">
			<Collapse title={"Equipements"} content={dataCurrentAccomodation[0].equipments}/>
			</div>
		</div>
			</main>
        	<Footer />
		</div>
	)
}