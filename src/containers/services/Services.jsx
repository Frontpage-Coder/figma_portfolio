import './services.css';
import Card from '../../components/card/Card';
import { services } from '../../constants/constants';

const Services = () => {
  return (
    <div className='app__services' id='services'>
        <div className='app__services-heading'>
            <h1>Services</h1>
            <p>What I Offer</p>
        </div>
        <div className='app__services-card'>
            {services.map((service, index) => (
                <Card key={service.id}
                icon={service.icon}
                title={service.title}
                info={service.info} />
            ))}
        </div>
    </div>
  )
}

export default Services