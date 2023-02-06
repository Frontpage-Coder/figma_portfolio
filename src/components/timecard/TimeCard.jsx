import React from 'react'

const TimeCard = ({id, title, place, year}) => {
  return (
    <div>
        <h4>{title}</h4>
        <p>{place}</p>
        <p>{year}</p>
    </div>
  )
}

export default TimeCard;