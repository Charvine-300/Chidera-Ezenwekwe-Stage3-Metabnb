import '../assets/styles/footer.scss'
import Logo from '../assets/images/footer_logo.png'
import Facebook from '../assets/images/social_fb.png'
import Twitter from '../assets/images/social_t.png'
import Instagram from '../assets/images/social_ig.png'
import { footerInfo } from '../assets/constants';
import { Link } from 'react-router-dom'


const Footer = () => {

  return ( 
    <>
      <footer>
        <div className="footer-wrapper">
          {footerInfo.map((fItem, index) => (
            <div className="footer-items" key={index}>
              <p> {fItem.topic} </p>
              <ul>
                {fItem.items.map((item, index) => (
                  <li key={index}> {item} </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-items logos">
            <Link to='/'>
              <img src={Logo} alt="Metabnb logo" className='footer-logo' />
            </Link>
            <div className="social-links">
              <img src={Facebook} alt="Metabnb Facebook Account" />
              <img src={Instagram} alt="Metabnb Instagram Account" />
              <img src={Twitter} alt="metabnb Twitter Account" />
            </div>
          </div>
        </div>
        <p> &copy; 2022 Metabnb </p>
      </footer>
    </>
  );
}
 
export default Footer;