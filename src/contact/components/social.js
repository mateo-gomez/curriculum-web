import React from 'react'

// Css
import './social.css'

// Images
import '../../images/facebook.svg'
import '../../images/github.svg'

export default function Social(props) {
  return (
    <a href={props.link}>
      <img className="social-link" src={props.img} />
    </a>
  )
}