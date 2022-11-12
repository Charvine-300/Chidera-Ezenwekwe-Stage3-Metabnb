import '../assets/styles/index.scss';
import Intro from '../assets/images/intro.png';
import Mask from '../assets/images/mask.png';
import Token from '../assets/images/token.png';
import Sea from '../assets/images/sea.png';
import NFTs from '../assets/images/metabnb_nfts.png';
import Homes from './Homes';


const Homepage = () => {


  return (  
    <>
      {/* Introduction Section */}
      <div className="intro-wrapper">
        <section>
          <h1>
            Rent a <strong> Place </strong> away from <strong> Home </strong> in the <strong> Metaverse </strong>
          </h1>
          <p>
            We provide you access to luxury and affordable 
            houses in the metaverse, get a chance to turn your 
            imagination to reality at your comfort zone
          </p>
          <div id="location-box">
            <button> Search </button>
            <input type="text" placeholder='Search for location' />
          </div>
        </section>
        <div className="intro-image">
          <img src={Intro} alt="Metabnb introduction section" />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className='sponsors-wrapper'>
        <section>
          <img src={Token} alt="mbtoken sponsor" />
          <img src={Mask} alt="metamask sponsor" />
          <img src={Sea} alt="opensea sponsor" />
        </section>
      </div>

      {/* Adventure Section */}
      <div className="adventure-wrapper">
        <h2> Inspiration for your next adventure </h2>
        <Homes />
      </div>

      {/* Metabnb NFTs Section */}
      <div className="metabnb-nfts">
        <section>
          <h2> Metabnb NFTs </h2>
          <p>  
            Discover our NFT gift cards collection. 
            Loyal customers gets amazing gift cards which 
            are traded as NFTs. These NFTs gives our cutomer 
            access to loads of our exclusive services.
          </p>
          <button> Learn more </button>
        </section>
        <div className="metabnb-img">
          <img src={NFTs} alt="Metabnb NFTs section" />
        </div>
      </div>
    </>
  );
}
 
export default Homepage;