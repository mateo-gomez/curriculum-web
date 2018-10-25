import React from 'react'
// Css
import './knowledges.css'
// Images
import '../../images/diploma-basico-nodejs.png'
import '../../images/diploma-html5-css3.png'
import '../../images/diploma-react.png'
import '../../images/diploma-webpack.png'
import '../../images/diploma-bd.png'
import '../../images/diploma-fundamentos-javascript-2017.png'
import '../../images/diploma-git-github.png'
// Components
import { Card, CardBody, CardImg, CardText, CardTitle, CardDeck } from 'reactstrap'


export default function Knowledges (props) {
  return (
    <div id="knowledges">
      <h1>Conocimientos</h1>
      <CardDeck className='Knowledges'>
        {
          props.cards.map((item) => {
            return (<Card key={item.id}>
              <CardImg top width="100px" src={item.img} />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText></CardText>
              </CardBody>
            </Card>)
          })
        }
      </CardDeck>
    </div>
  )
}