import './card.css';


const Card = ({title, info, icon}) => {
  return (
    <div className='app__card'>
        <div className='app__card-container'>
          <h3>{icon}</h3>
          <h4>{title}</h4>
           <p>{info}</p> 
        </div>
    </div>
  )
}

export default Card