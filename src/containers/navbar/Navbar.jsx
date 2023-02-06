import './navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='app__navbar-img'>
                <span className='black'>krish</span><span className='orange'>4alex</span>
            </div>
            <div className='app__navbar-links'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <GiHamburgerMenu style={{display: 'none'}}/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar