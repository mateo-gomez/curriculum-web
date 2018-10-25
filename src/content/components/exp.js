import React from 'react'

export default function Exp (props) {
  return (
    <div>
      <h4>{props.data.title}</h4>
      <h5>{props.data.subtitle} | 
      <span className="text-muted"> {props.data.muted}</span></h5>
      <h6>{props.data.place}</h6>
      <p>{props.data.text}</p>
    </div>
  )
}