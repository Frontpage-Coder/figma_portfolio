import './footer.css';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='app__footer'>
        <h1>Krish<span>4alex</span></h1>
        <div className='app__footer-links'>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
        </div>
        <div className='app__footer-social_links'>
            <a href="https://www.facebook.com/"><AiFillFacebook /></a>
            <a href="https://twitter.com"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com"><AiFillInstagram /></a>
        </div>
        <p>@krish4alex. All rights reserved(Niwarak Singla)</p>
    </div>
  )
}

export default Footer