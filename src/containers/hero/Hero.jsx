import './hero.css';
import hero  from '../../assets/Ellipse.png';
import { FiSend } from 'react-icons/fi';
import {BsArrowDown} from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='app' id='home'>
    <div className='app__hero'>
        <div className='app__hero-container'>
            <h1>krish<span className='orange'>4alex</span></h1>
            <div className='app__hero-content'>
                <div className='pointer'></div>
                <p>User Interface Designer</p>
            </div>
                <p>I’m UI/UX designer in lucknow , and I’m  very passionate 
and dedicated to my work..</p>
            <div className='app__hero-btn'>
                <span className='app__hero-btn_span'>say Hello</span> <span><FiSend/></span>
            </div>
        </div>
            <div className='app__hero-img'>
                <img src={hero} alt="hero" />
            </div>
        
    </div>
        <p><span>scroll down</span> <span><BsArrowDown /></span></p>
    </div>
  )
}

export default Hero