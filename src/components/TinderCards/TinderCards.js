import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Jason Statham',
      url:
        "https://res.cloudinary.com/shafali/image/upload/v1603908119/jason-statham_j6ccpc.jpg",
    },
    {
      name: 'Ema Smith',
      url:
        "https://res.cloudinary.com/shafali/image/upload/v1603908157/beautiful-1274361_640_1_svgdkd.jpg",
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen')
  }

  return (
    <div className='tinderCards'>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >

              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}

      </div>
    </div>
  )
}

export default TinderCards
