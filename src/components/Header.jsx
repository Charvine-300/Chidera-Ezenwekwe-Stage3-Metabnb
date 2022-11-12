import { useState } from 'react'
import '../assets/styles/header.scss'
import Logo from '../assets/images/navbar_logo.png'
import Menu from '../assets/images/menu.png'
import Close from '../assets/images/close.png'
import { Link } from 'react-router-dom'


const Header = () => {
  const [display, setDisplay] = useState('desktop');
  const [menu, setMenu] = useState(Menu);

  const menuToggle = () => {
    if (display === 'desktop') {
      setDisplay('mobile');
      setMenu(Close);
    }

    else {
      setDisplay('desktop');
      setMenu(Menu);
    }
  }

  const closeMenu = () => {
    setDisplay('desktop');
    setMenu(Menu);
  }



  return (  
    <header>
      <div className="header-wrapper">
        <Link to='/' onClick={closeMenu}>
          <img src={Logo} alt="Metabnb Logo" id='logo' />
        </Link>
        <ul className="desktop-menu desktop">
          <Link to='/' onClick={closeMenu}>
            <li> Home </li>
          </Link>
          <Link to="/places" onClick={closeMenu}>  
            <li> Place to say </li>
          </Link>
          <li> NFTs </li>
          <li> Community </li>
        </ul>
        <button id="wallet" className="desktop"> Connect wallet </button>
        <img src={menu} alt="Menu" id='hamburger' className='mobile' onClick={menuToggle} />
      </div>
      <div className={`mobile-menu ${display}`}>
        <ul>
          <Link to='/' onClick={closeMenu}>
            <li> Home </li>
          </Link>
          <Link to="/places" onClick={closeMenu}>  
            <li> Place to say </li>
          </Link>
          <li> NFTs </li>
          <li> Community </li>
        </ul>
      </div>

    </header>
  );
}
 
export default Header;