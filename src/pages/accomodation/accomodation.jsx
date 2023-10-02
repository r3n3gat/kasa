import './accomodation.scss'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Collapse from "../../components/collapse/collapse"
import datas from "../../datas/datas"
import { useParams } from "react-router-dom";

export default function Accomodation() {
	
const idAccomodation = useParams('id').id;
const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
	return (
		<div>
        	<Header />
			<main className="accomodation">
			<h1>{dataCurrentAccomodation[0].title}</h1>
			<p>{dataCurrentAccomodation[0].location}</p>
			<div>
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return (
									<button className="tag" key={index}>{tag}</button>
								)
							})}
						</div>
		<div className="container-collapse">
			<Collapse className="accomodation-collapse" title={"Description"} content={datas.description}/>
			<Collapse title={"Equipements"} content={datas.equipments}/>

		</div>
		</main>
        	<Footer />
		</div>
	)
}