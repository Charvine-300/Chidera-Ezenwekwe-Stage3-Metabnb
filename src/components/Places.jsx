import Homes from "./Homes";
import { useState } from "react";
import Location from '../assets/images/location.png';
import Expand from '../assets/images/modal_expand.png';
import Contract from '../assets/images/modal_contract.png';
import { placesHomes, filters } from "../assets/constants";


const Places = () => {
  const [filter, setFliter] = useState(Expand);
  const [filterMenu, setFliterMenu] = useState('desktop');

  const filterToggle = () => {
    if (filterMenu === 'desktop') {
      setFliterMenu('mobile');
      setFliter(Contract);
    }

    else {
      setFliterMenu('desktop');
      setFliter(Expand);
    }
  }
  
  return (  
    <>
      <div className="filter-container">
        <div className="filter-wrapper">
          <div className="filters mobile">
            <p> Filters </p>
            <img src={filter} alt="Filter list toggle" onClick={filterToggle} />
          </div>
          {filters.map((item, index) => (
            <li key={index} className='desktop'> {item} </li>
          ))}
          <div className="filters">
            <p> Location </p>
            <img src={Location} alt="Location toggle" />
          </div>
        </div>
        <div className={`filter-menu ${filterMenu}`}>
          <ul>
            {filters.map((item, index) => (
              <li key={index}> {item} </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="adventure-wrapper">
        <Homes homes={placesHomes} />
      </div>
    </>
  );
}
 
export default Places;