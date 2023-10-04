import './accomodation.scss'
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import Collapse from "../../components/collapse/collapse"
import datas from "../../datas/datas"
import { useParams, useNavigate } from "react-router-dom"
import ActiveStar from "../../assets/star-active.png"
import InactiveStar from "../../assets/star-inactive.png"
import { useEffect, useState } from "react"
import Slider from "../../components/carrousel/carrousel"

export default function Accomodation() {
	const [imageSlider, setImageSlider] = useState([]); // State to store carousel images
	const navigate = useNavigate(); // Hook for the navigation and error page
	const { id } = useParams(); // Hosting ID retrieval from URL parameters
  // Data filtering to obtain the current hosting based on the ID
  const dataCurrentAccomodation = datas.find(data => data.id === id);

  // Redirect to error page if the id of an accomodation is not found
  useEffect(() => {
    if (!dataCurrentAccomodation) {
      navigate('/error'); 
    } else {
      setImageSlider(dataCurrentAccomodation.pictures);
    }
  }, [dataCurrentAccomodation, navigate]);

  // Hosting page rendering
  if (!dataCurrentAccomodation) {
    return null;
  }

  // Retrieve rating and host name
  const { rating, host } = dataCurrentAccomodation;
  const name = host.name.split(' ');

  return (
    <div>
      <Header />
      <main className="accomodation">
        <Slider imageSlider={imageSlider}/>
        <div className="info-container">
          <div className="location-container">
            <div className="accomodation_title">
              <h1>{dataCurrentAccomodation.title}</h1>
            </div>
            <p>{dataCurrentAccomodation.location}</p>
            <div>
              {dataCurrentAccomodation.tags.map((tag, index) => {
                return (
                  <button className="tag" key={index}>{tag}</button>
                )
              })}
            </div>
          </div>
          <div className="host-container">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src={index < rating ? ActiveStar : InactiveStar}
                  alt="star"/>
              ))}
            </div>
            <div className="accomodation_host">
              <div className="host-info">
                <span className="host-lastname">{name[0]}</span>
                <span className="host-firstname">{name[1]}</span>
              </div>
              <img className="picture" src={host.picture} alt="propriétaire de l'appartement" />
            </div>
			</div>
        </div>
        <div className="accomodation-collapse">
          <div className="accomodation-collapse_item">
            <Collapse title={"Description"} content={dataCurrentAccomodation.description}/>
          </div>
          <div className="accomodation-collapse_item">
            <Collapse title={"Equipements"} content={dataCurrentAccomodation.equipments}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}