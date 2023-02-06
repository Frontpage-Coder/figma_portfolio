import './testimonials.css';
import { feedbackcard } from '../../constants/constants';
import FeedbackCard from '../../components/feedback/FeedbackCard';

const Testimonials = () => {
  return (
    <div className='app__testimonials'>
        <div className='app__testimonials-heading'>
            <h1>Testimonials</h1>
            <p>My Clients Sayings</p>
        </div>
        <div className='app__testimonials-feedbackcard'>
            {feedbackcard.map((item) => (
                <FeedbackCard key={item.id}
                say={item.say}
                icon={item.icon}
                author={item.author}
                position={item.position} />
            ))}
        </div>
    </div>
  )
}

export default Testimonials