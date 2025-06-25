import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo/ff-white-logo.png';
import menu from '../../assets/logo/menu.png';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
        <nav className="navbar">
            <img src={logo} alt="logo"className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='profile' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Service</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link>
            </div>
            <button className="desktopMenuButton"onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>Contact Me</button>


           <img src={menu} alt="menu"className='mobileMenu'onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='profile' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Service</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    </div>
  )
}
