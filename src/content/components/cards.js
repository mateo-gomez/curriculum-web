import React from 'react'

// Components
import Card from "./card";

// Style css
import './cards.css'

export default function Cards(props) {
  return (
    <div id="aboutMe" className="Cards container">
      {
        props.aboutMe.map((item) => {
          return (
              <Card
                key={item.id}
                title={item.title}
                body={item.body}
                img={item.img}
                alt={item.alt}
              />
          )
        })
      }
    </div>
  )
}