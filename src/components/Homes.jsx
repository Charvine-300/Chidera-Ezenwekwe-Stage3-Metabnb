import '../assets/styles/homes.scss';
import { indexHomes } from '../assets/constants';
import Star from '../assets/images/star.png';


const Homes = ({ homes }) => {

  return (  
    <>
      <div className="homes-wrapper">
        {homes.map((home, index) => (
          <div className="home" key={index}>
            <img src={home.img} alt="Metabnb home" className='home-img' />
            <div className="home-info">
              <p> Desert king </p>
              <p id='bold-info'> 1MBT per night </p>
            </div>
            <div className="home-info">
              <p> 2345km away </p>
              <p> available for 2weeks stay </p>
            </div>
            <div className="stars">
              <img src={Star} alt="star sign" />
              <img src={Star} alt="star sign" />
              <img src={Star} alt="star sign" />
              <img src={Star} alt="star sign" />
              <img src={Star} alt="star sign" />
            </div>
          </div>
        ))}
      </div>

    
    </>
  );
}
 
export default Homes;