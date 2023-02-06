import './contact.css';
import Card from '../../components/card/Card';
import { details } from '../../constants/constants';

const Contact = () => {
  return (
    <div className='app__contact' id='contact'>
        <div className='app__contact-heading'>
            <h1>Contact</h1>
            <p>Get in Touch</p>
        </div>
        <div className='app__contact-content'>
            <div className='app__contact-content_details'>
            <h4 className='head'>Talk to Me</h4>
                {details.map((item) => (
                    <Card key={item.id}
                    icon={item.icon}
                    title={item.title}
                    info={item.info} 
                    style={{cursor: 'pointer'}}
                    />
                ))}
            </div>
            <div className='app__contact-content_email'>
            <h4 className='head'>Write Your Project</h4>
                <input type="text" placeholder='Enter Your Name'/>
                <input type="email" placeholder='Enter Your Email' />
                <textarea name="project" placeholder='Write your project' 
                id="" cols="30" rows="10"></textarea>
                <button type='button'>Send Message</button>
            </div>
        </div>
    </div>
  )
}

export default Contact