import './about.css';
import Card from '../../components/card/Card';
import about from '../../assets/about.png';
import { aboutInfo } from '../../constants/constants';

const About = () => {
  return (
    <div className='app__about' id='about'>
    <div className='app__about-heading'>
      <h1>About Me</h1>
      <p>My Introducion</p>
    </div>
    <div className='app__about-container'>
      <div className='app__about-container_img'>
        <img src={about} alt="me" />
      </div>
      <div className='app__about-container_content'>
      <div className='app__about-container_card'>
        {aboutInfo.map((item, index) => (
          <Card key={item.id}
          icon={item.icon}
          title={item.title}
          info={item.info} />
        ))}
        
      </div>
      <div className='app__about-container_para'>
      <p>UI/UX designer , I create web pages UI /UX userinterface ,
Ihave years of experience and many clients are happy with 
the projects carried out.</p>
    <div className='app__about-container_para-btn'><span>Download cv</span></div>
      </div>


      </div>
      
    </div>
    
    </div>
  )
}

export default About;