import './education.css';
import { education } from '../../constants/constants';
import { experience } from '../../constants/constants';
import TimeCard from '../../components/timecard/TimeCard';

const Education = () => {
  return (
    <div className='app__timeline' id='blog'>
        <div className='app__timeline-heading'>
            <h1>Education</h1>
            <p>My Personal Journey</p>
        </div>
        <div className='app__timeline-subHeadings'>
        <h3>Education</h3>
        <h3>Experience</h3>
        </div>
        <div className='app__timeline-table'>
            <div className='app__timeline-table_education'>
                
                {education.map((item) => (
                    <TimeCard  key={item.id}
                        title={item.title}
                        place={item.place}
                        year={item.year}
                    />
                ))}
            </div>
            <div className='app__timeline-table_pointer'></div>
                <div className='circle circle1'></div>
                <div className='circle circle2'></div>
                <div className='circle circle3'></div>
                <div className='circle circle4'></div>
            
            <div className='app__timeline-table_experience'>
                    
                {experience.map((items) => (
                    <TimeCard  key={items.id}
                        title={items.title}
                        place={items.place}
                        year={items.year}   
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Education