import './feedbackcard.css';

const FeedbackCard = ({id, icon, say, author, position}) => {
  return (
    <div className='app__feebackcard'>
        <div className='app__feebackcard-content'>
            <div className='app__feeback-content-line'></div>
            <p>{say}</p>
        </div>
        <div className='app__feedback-byline'>
            <p>{icon}</p>
            <div className='app__feedback-byline_author'>
                <h3>{author}</h3>
                <p>{position}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard